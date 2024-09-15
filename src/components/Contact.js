const Contact = () => {
    return (
        <div className="contact flex justify-center bg-slate-100 h-[560px]">
            <div className="contact  w-full text-white bg-orange-300 p-4 m-4  rounded-lg">
                <h2 className="font-bold ml-5 text-2xl ">Help and Support </h2>
                <h4 className="ml-5">Let's take a step ahead and help you better.</h4>
                <div className="detail m-4 h-full rounded-lg bg-white p-8">
                    <h1 className="text-slate-500 text-2xl font-bold">Partner Onboarding</h1>
                    <ul className="list text-slate-500 font-bold mt-4">
                        <button className="mt-3 text-lg block hover:text-orange-300">I want to partner my restaurant with FastFood</button> 
                        <button className="mt-3 text-lg block hover:text-orange-300">What are the mandatory documents needed to list my restaurant on FastFood?</button>
                        <button className="mt-3 text-lg block hover:text-orange-300">I want to opt-out from Google reserve</button>
                        <button className="mt-3 text-lg hover:text-orange-300">After I submit all documents, how long will it take for my restaurant to go live on FastFood?</button>
                        <button className="mt-3 text-lg hover:text-orange-300">What is this one time Onboarding fees? Do I have to pay for it while registering?</button>
                        <button className="mt-3 text-lg block hover:text-orange-300">Who should I contact if I need help & support in getting onboarded?</button>
                        <button className="mt-3 text-lg block hover:text-orange-300">How much commission will I be charged by FastFood?</button>
                        <button className="mt-3 text-lg hover:text-orange-300">I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;