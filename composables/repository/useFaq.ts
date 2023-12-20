const getFaqsByCategory = async (category: string) => {
	return await $fetch('/faqs/faqsByCategory', {method: 'post', body: {category}});
}

const getFaqsBySlug = async (slug: string) => {
	return await $fetch('/faqs/faqsBySlug', {method: 'post', body: {slug}});
}

const getFallbackFaqs = () => {
	return [
		{
			question: 'how is Stack different from other apps?',
			answer: `
       <p >Every retail investor is burdened with researching equity, debt & gold mutual funds, deciding the right market capitalization split (large cap, mid cap, small cap) and sectoral split and staying up to date with market trends.</p>
       <p >
        <b>Stack is your team of investment experts, mutual fund advisors and portfolio managers</b> that grow your wealth by choosing the right mutual funds, bonds, stocks, real estate and P2P debt borrowers with quality credit rating based on your goals and risk appetite.
       </p>
    `
		},
		{
			question: 'why should I trust Stack?',
			answer: `
       <p >
         Our investment team has over <b>50+ years of experience</b> in investment & portfolio management, mutual fund advisory, managing over ₹1600 Crore in investments.
       </p>
       <p >
         We are registered with <b>AMFI</b> (ARN Holder Number - 171554) and <b>SEBI</b> and comply with all of their security guidelines.
       </p>
       <p >
         We encrypt all user data with <b>bank-grade TLS hack-proof security</b> and safeguard our app through MFA (Multi-Factor Authentication) to protect your sensitive information.
       </p>
    `
		},
		{
			question: 'where does my money go?',
			answer: `
       <p >
         Stack lets you access a variety of financial products including & not limited to <b>mutual funds (equity, debt and gold), direct debt investments (P2P lending), managed stocks, real estate etc.</b>
       </p>
       <p >
         With regards to Stack Prime, your money is invested in Asset Management Companies that allocate your funds to the selected mutual funds in your curated portfolio.
       </p>
       <p >
         When you invest in <b>Stack Flash</b>, your money is lent to creditworthy borrowers that repay the debt with the fixed interest rate.
       </p>
    `
		},
		{
			question: 'how high will my returns be when I invest in Stack?',
			answer: `
       <p >
        Our best portfolio can give you high long-term returns when you invest for a longer time frame. This also means
        you will be taking on a certain amount of risk. Ideally our most aggressive long-term portfolio can give
        <b>you up to 17% returns in a 10+ year time frame.</b> Stack Flash gives <b>you up to 11% interest p.a.</b>
        with daily or monthly returns that can be credited to your account or reinvested.
       </p>
    `
		},
		{
			question: 'is money the most important thing in the world?',
			answer: `
       <p >
        people hate math, but love counting their money. what does that tell you?
       </p>
    `
		}
	];
};

export { getFaqsByCategory, getFaqsBySlug, getFallbackFaqs };
