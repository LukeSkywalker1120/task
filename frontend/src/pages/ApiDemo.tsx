import { useState, useEffect } from 'react';
import {
  useWebsitesList,
  useWebsite,
  useCreateWebsite,
  useUpdateWebsite,
  useDeleteWebsite,
} from '../hooks/useWebsites';
import { useCurrentSession, useLogin, useLogout } from '../hooks/useAuth';
import { ErrorMessage, Loading } from '../components';
import type { WebsiteListItem } from '../api/generated';

export function ApiDemo() {
  // Auth
  const { data: session } = useCurrentSession();
  const isLoggedIn = !!session?.data;
  const login = useLogin();
  const logout = useLogout();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  // State for forms
  const [selectedWebsiteId, setSelectedWebsiteId] = useState<string | null>(null);
  const [createForm, setCreateForm] = useState({
    account_id: '',
    domain: '',
    platform: 'shopify',
  });
  const [updateForm, setUpdateForm] = useState({
    display_name: '',
    platform: 'shopify',
  });

  // Auto-fill account_id from session after login
  useEffect(() => {
    if (session?.data?.account?.id) {
      setCreateForm((prev) => ({ ...prev, account_id: session.data.account.id }));
    }
  }, [session?.data?.account?.id]);

  // API Hooks - GET operations
  const { data: websitesList, isLoading: isLoadingList, error: listError, refetch: refetchList } = useWebsitesList(20, 0);
  const { data: websiteDetail, isLoading: isLoadingDetail, error: detailError } = useWebsite(selectedWebsiteId);

  // API Hooks - POST/PUT/DELETE operations
  const createWebsite = useCreateWebsite();
  const updateWebsite = useUpdateWebsite(selectedWebsiteId || '');
  const deleteWebsite = useDeleteWebsite();

  // Handlers
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createForm.account_id || !createForm.domain) return;

    try {
      await createWebsite.mutateAsync(createForm);
      setCreateForm({ account_id: '', domain: '', platform: 'shopify' });
    } catch (err) {
      console.error('Create failed:', err);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWebsiteId || !updateForm.display_name) return;

    try {
      await updateWebsite.mutateAsync(updateForm);
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleDelete = async (websiteId: string) => {
    if (!confirm('Are you sure you want to delete this website?')) return;

    try {
      await deleteWebsite.mutateAsync(websiteId);
      if (selectedWebsiteId === websiteId) {
        setSelectedWebsiteId(null);
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleSelectWebsite = (website: WebsiteListItem) => {
    setSelectedWebsiteId(website.id);
    setUpdateForm({
      display_name: website.domain,
      platform: website.platform,
    });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1>API Integration Demo</h1>
      <p>
        This page demonstrates full CRUD operations (GET, POST, PUT, DELETE) using the generated
        type-safe API client from OpenAPI specification.
      </p>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f0f9ff', borderRadius: '8px' }}>
        <h3>Configuration</h3>
        <p style={{ margin: '0.5rem 0' }}>
          <strong>API Base URL:</strong> <code>{import.meta.env.VITE_API_BASE_URL || 'Not configured'}</code>
        </p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#666' }}>
          Set <code>VITE_API_BASE_URL</code> in your <code>.env</code> file to connect to a real API.
        </p>
      </div>

      {/* Error Messages */}
      {listError && (
        <ErrorMessage
          message={`Failed to load websites: ${listError instanceof Error ? listError.message : 'Unknown error'}`}
          onDismiss={() => refetchList()}
        />
      )}
      {createWebsite.isError && (
        <ErrorMessage
          message={`Create failed: ${createWebsite.error instanceof Error ? createWebsite.error.message : 'Unknown error'}`}
          onDismiss={() => createWebsite.reset()}
        />
      )}
      {updateWebsite.isError && (
        <ErrorMessage
          message={`Update failed: ${updateWebsite.error instanceof Error ? updateWebsite.error.message : 'Unknown error'}`}
          onDismiss={() => updateWebsite.reset()}
        />
      )}
      {deleteWebsite.isError && (
        <ErrorMessage
          message={`Delete failed: ${deleteWebsite.error instanceof Error ? deleteWebsite.error.message : 'Unknown error'}`}
          onDismiss={() => deleteWebsite.reset()}
        />
      )}

      {/* ── Login / Session ── */}
      <div style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: isLoggedIn ? '#f0fdf4' : '#fff' }}>
        {isLoggedIn ? (
          /* ── Logged-in state ── */
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: '#166534' }}>
                ✓ Signed in
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.25rem' }}>
                <span style={{ marginRight: '1.5rem' }}>
                  <strong>User:</strong> {session!.data.user.name} ({session!.data.user.email})
                </span>
                <span>
                  <strong>Account:</strong> {session!.data.account.name} &nbsp;
                  <code style={{ fontSize: '0.8rem', background: '#e5e7eb', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>
                    {session!.data.account.id}
                  </code>
                </span>
              </div>
              {session!.data.subscription?.plan_id && (
                <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.2rem' }}>
                  Plan: {session!.data.subscription.plan_id}
                </div>
              )}
            </div>
            <button
              onClick={() => logout.mutate()}
              disabled={logout.isPending}
              style={{
                padding: '0.5rem 1.25rem',
                background: logout.isPending ? '#9ca3af' : '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: logout.isPending ? 'not-allowed' : 'pointer',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {logout.isPending ? 'Signing out…' : 'Sign Out'}
            </button>
          </div>
        ) : (
          /* ── Login form ── */
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Sign In</h3>
            {login.isError && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', color: '#b91c1c', fontSize: '0.875rem' }}>
                {login.error instanceof Error ? login.error.message : 'Login failed'}
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login.mutate(loginForm);
              }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'flex-end' }}
            >
              <div style={{ flex: '1 1 220px' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500, fontSize: '0.875rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="founder@example.com"
                  required
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ flex: '1 1 220px' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500, fontSize: '0.875rem' }}>
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="••••••••"
                  required
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }}
                />
              </div>
              <button
                type="submit"
                disabled={login.isPending}
                style={{
                  padding: '0.5rem 1.5rem',
                  background: login.isPending ? '#9ca3af' : '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: login.isPending ? 'not-allowed' : 'pointer',
                  fontWeight: 500,
                  height: '38px',
                }}
              >
                {login.isPending ? 'Signing in…' : 'Sign In'}
              </button>
            </form>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        {/* Left Column: List and Create */}
        <div>
          {/* CREATE - POST */}
          <section style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>
              <span style={{ background: '#10b981', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', marginRight: '0.5rem' }}>POST</span>
              Create Website
            </h2>
            <form onSubmit={handleCreate}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>
                  Account ID *
                </label>
                <input
                  type="text"
                  value={createForm.account_id}
                  onChange={(e) => setCreateForm({ ...createForm, account_id: e.target.value })}
                  placeholder="acc_1234567890"
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>
                  Domain *
                </label>
                <input
                  type="text"
                  value={createForm.domain}
                  onChange={(e) => setCreateForm({ ...createForm, domain: e.target.value })}
                  placeholder="example.com"
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>
                  Platform *
                </label>
                <select
                  value={createForm.platform}
                  onChange={(e) => setCreateForm({ ...createForm, platform: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                >
                  <option value="shopify">Shopify</option>
                  <option value="woocommerce">WooCommerce</option>
                  <option value="magento">Magento</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={createWebsite.isPending || !createForm.account_id || !createForm.domain}
                style={{
                  padding: '0.5rem 1rem',
                  background: createWebsite.isPending ? '#9ca3af' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: createWebsite.isPending ? 'not-allowed' : 'pointer',
                  fontWeight: 500,
                }}
              >
                {createWebsite.isPending ? 'Creating...' : 'Create Website'}
              </button>
              {createWebsite.isSuccess && (
                <span style={{ marginLeft: '1rem', color: '#10b981', fontWeight: 500 }}>✓ Created successfully</span>
              )}
            </form>
          </section>

          {/* LIST - GET */}
          <section style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>
              <span style={{ background: '#3b82f6', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', marginRight: '0.5rem' }}>GET</span>
              Websites List
            </h2>
            {isLoadingList && <Loading />}
            {websitesList?.data && (
              <div>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Total: {websitesList.pagination.total} websites
                </p>
                {websitesList.data.length === 0 ? (
                  <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>No websites found. Create one above!</p>
                ) : (
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {websitesList.data.map((website) => (
                      <div
                        key={website.id}
                        style={{
                          padding: '1rem',
                          marginBottom: '0.5rem',
                          border: selectedWebsiteId === website.id ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          background: selectedWebsiteId === website.id ? '#eff6ff' : 'white',
                        }}
                        onClick={() => handleSelectWebsite(website)}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{website.domain}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                              Platform: {website.platform} | Status: {website.status}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                              ID: {website.id}
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(website.id);
                            }}
                            disabled={deleteWebsite.isPending}
                            style={{
                              padding: '0.25rem 0.5rem',
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.875rem',
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Detail and Update */}
        <div>
          {/* DETAIL - GET by ID */}
          <section style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>
              <span style={{ background: '#3b82f6', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', marginRight: '0.5rem' }}>GET</span>
              Website Detail
            </h2>
            {!selectedWebsiteId ? (
              <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>Select a website from the list to view details</p>
            ) : (
              <>
                {isLoadingDetail && <Loading />}
                {detailError && (
                  <p style={{ color: '#ef4444' }}>
                    Error: {detailError instanceof Error ? detailError.message : 'Failed to load'}
                  </p>
                )}
                {websiteDetail?.data && (
                  <pre style={{
                    background: '#f9fafb',
                    padding: '1rem',
                    borderRadius: '6px',
                    overflow: 'auto',
                    fontSize: '0.875rem',
                    maxHeight: '300px',
                  }}>
                    {JSON.stringify(websiteDetail.data, null, 2)}
                  </pre>
                )}
              </>
            )}
          </section>

          {/* UPDATE - PUT */}
          <section style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>
              <span style={{ background: '#f59e0b', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', marginRight: '0.5rem' }}>PUT</span>
              Update Website
            </h2>
            {!selectedWebsiteId ? (
              <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>Select a website from the list to update</p>
            ) : (
              <form onSubmit={handleUpdate}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={updateForm.display_name}
                    onChange={(e) => setUpdateForm({ ...updateForm, display_name: e.target.value })}
                    placeholder="My Awesome Store"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>
                    Platform
                  </label>
                  <select
                    value={updateForm.platform}
                    onChange={(e) => setUpdateForm({ ...updateForm, platform: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                  >
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={updateWebsite.isPending}
                  style={{
                    padding: '0.5rem 1rem',
                    background: updateWebsite.isPending ? '#9ca3af' : '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: updateWebsite.isPending ? 'not-allowed' : 'pointer',
                    fontWeight: 500,
                  }}
                >
                  {updateWebsite.isPending ? 'Updating...' : 'Update Website'}
                </button>
                {updateWebsite.isSuccess && (
                  <span style={{ marginLeft: '1rem', color: '#10b981', fontWeight: 500 }}>✓ Updated successfully</span>
                )}
              </form>
            )}
          </section>
        </div>
      </div>

      {/* API Status Summary */}
      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>API Operations Summary</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>GET</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>List & Detail</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>POST</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Create</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>PUT</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Update</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>DELETE</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Remove</div>
          </div>
        </div>
      </section>
    </div>
  );
}
