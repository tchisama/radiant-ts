"use client"
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
    return (
        <div className="h-fit py-20">
            <InlineWidget
            styles={{
              overflow: 'hidden',
              height: '70vh',
            }}
             url="https://calendly.com/pro-tchisama?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=222222&primary_color=222222" />
        </div>
    );
};



export default Calendly;
