import React from 'react';

const Modal = () => {
  return (
    <div className='ease-modal e-d-flex e-fd-column e-justify-center e-align-center e-pd-20" id="subscription-reminder'>
        <div className='e-container'>
            <div className="e-felx-sm-3 e-flix-x1-2">
                <div className="e-card ease-subscription-plan ease-modal-inner">
                    <div className="e-card__header e-ta-center e-justify-center">
                        <span className="e-card__title e-fw-bld">Reminder - Subscription</span>
                    </div>
                    <div className="e-card__body e-ta-center e-overflow-hidden">
                        <div className="e-h2">Subscription</div>
                        <span className="e-fs-12">Expires in 10 days</span>

                        <p className="e-mg-y-10">This is a reminder to renew your yearly subscription plan.</p>

                        <div className="e-h2">$4,623.76</div>
                        <span className="e-d-block e-fs-12 e-mg-b-10">1 Year - Renews in 2024</span>

                        <a href="#" className="e-btn e-fs-16">Renew plan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;
