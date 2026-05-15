import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const RefundPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* HEADER SECTION */}
            <section className="section-wrap" style={{ background: 'var(--grad-bg)', paddingBottom: '60px' }}>
                <div className="container">
                    <div className="section-title-block center reveal in">
                        <div className="section-eyebrow"><span className="pill pill-fire">Billing Policy</span></div>
                        <h1 className="display-lg">Refund Policy</h1>
                        <p className="section-desc">Last Updated: May 13, 2026</p>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="section-wrap" style={{ paddingTop: '20px' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div className="card reveal in" style={{ padding: '48px', border: '1px solid var(--border-light)' }}>
                        <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>1. 20-day free trial</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                                    Hotel offers a 20-day free trial for new users to explore our features without any financial commitment. No credit card is required to start the trial. We encourage all users to fully test the platform during this period to ensure it meets their hotel's requirements.
                                </p>
                            </div>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>2. Subscription Cancellations</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                                    You may cancel your subscription at any time through your account dashboard or by contacting our support team. Upon cancellation, your service will remain active until the end of the current billing cycle. No further charges will be applied after cancellation.
                                </p>
                            </div>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>3. Refund Eligibility</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem', marginBottom: '12px' }}>
                                    Since our Service is digital and provides a 20-day free trial, refunds for paid subscriptions are generally not provided. However, we may consider refund requests in the following exceptional cases:
                                </p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--smoke)', lineHeight: '1.8' }}>
                                    <li>Technical issues on our end that prevented you from using the service for more than 48 hours.</li>
                                    <li>Duplicate billing or accidental overcharges.</li>
                                    <li>Failure to activate features that were explicitly promised in your paid plan.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>4. Refund Process</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                                    To request a refund under the eligible criteria mentioned above, please email us at <strong>info@biosoftech.com</strong> within 7 days of the transaction. Please include your hotel details and the reason for the request. If approved, the refund will be processed back to the original payment method within 7-10 working days.
                                </p>
                            </div>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>5. Annual Plan Refunds</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                                    Annual plans are discounted significantly. If an annual plan is cancelled mid-term, no partial refunds will be issued for the remaining months. The service will continue until the end of the one-year period.
                                </p>
                            </div>

                            <div>
                                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>6. Contact for Billing Queries</h2>
                                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                                    For any questions regarding billing, invoices, or refunds, please reach out to us:
                                    <br /><br />
                                    <strong>WhatsApp Support:</strong> +91-9044425858, +91-6209688930<br />
                                    <strong>Email:</strong> info@biosoftech.com
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="divider-gold"></div>
        </Layout>
    );
};

export default RefundPolicyPage;
