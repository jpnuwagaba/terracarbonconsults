import React from 'react'

const Aboutdetails = () => {
    return (
        <section className="bg-background py-16 sm:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">overview</p>
                <h2 className="mt-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                    About Us
                </h2>
                <div className="mt-5 max-w-3xl mx-auto text-center flex flex-col gap-6">
                    <p className="text-base leading-7 text-primary/80 sm:text-lg">
                        TerraCarbon Consults is a climate and carbon markets advisory firm enabling project developers, investors, governments, and enterprises to unlock value across the global carbon and climate economy. We deliver integrated, end-to-end solutions spanning environment, ESG, carbon project origination, feasibility studies and technical assessments, certification, and market access, anchored in environmental integrity and aligned with international standards.          </p>
                    <p className="text-base leading-7 text-primary/80 sm:text-lg">We operate at the intersection of technical support, policy, finance, and technology, supporting Article 6 readiness, access to carbon markets, environmental assessments, structuring investment-grade climate projects, and deploying digital MRV systems that enhance transparency and trust. With deep regional expertise and global market insight, we translate climate ambition into scalable, bankable, and high-impact outcomes helping various enterprises access the carbon market.</p>
                </div>
            </div>
        </section>
    )
}

export default Aboutdetails