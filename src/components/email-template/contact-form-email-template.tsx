type ContactEmailTemplateProps = {
  name: string
  email: string
  message: string
}

export default function ContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
        backgroundColor: '#ffffff',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        color: '#111827',
      }}
    >
      <h2
        style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '32px',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '12px',
        }}
      >
        New Contact Message
      </h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ marginBottom: '4px', fontWeight: '500' }}>Full Name</p>
        <p style={{ margin: 0, color: '#374151' }}>{name}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ marginBottom: '4px', fontWeight: '500' }}>Email</p>
        <p style={{ margin: 0, color: '#374151' }}>{email}</p>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ marginBottom: '4px', fontWeight: '500' }}>Message</p>
        <div
          style={{
            marginTop: '8px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            color: '#374151',
            whiteSpace: 'pre-line',
          }}
        >
          {message}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '32px 0' }} />

      <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
        This message was sent from your portfolio site's contact form.
      </p>
    </div>
  );
}
