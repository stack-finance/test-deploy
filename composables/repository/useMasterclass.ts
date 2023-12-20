export const getModules = () => {
	return [
		{
			id: 1,
			video: 'https://webstatic.stackfinance.co/masterclass/m1.mp4',
			name: 'why should you invest?',
			thumb: 'https://webstatic.stackfinance.co/masterclass/M1.jpg',
			description:
					'The bottom line reason to invest is - inflation. Everything is going to get more expensive and your ' +
					'FDs are not going to do your wealth any justice. Another reason is the power of compounding. We all have goals for' +
					' the future, and investing is a great way to start working towards them now. Buying a home or a car, marriage,' +
					' a holiday trip or even a brand new laptop - you can reach these goals and earn more than your target amount if you' +
					' start right now. Investing is very important to the top 1% because it’s what keeps them there.',
			slug: 'why-should-you-invest',
			summary: `
      <p class="fo-sm-24">Investing your salary can help you to grow your wealth over time and prepare for your financial future. By investing your money, you can potentially earn a higher return on your savings than you would with a traditional savings account, which can help you to reach your financial goals faster. Additionally, investing your salary can provide you with financial security and peace of mind, knowing that you are taking steps to secure your financial future.</p>
      <p class="fo-sm-24">Inflation is the rate at which the general level of prices for goods and services is rising and subsequently, purchasing power is falling. Central banks attempt to limit inflation and avoid deflation, in order to keep the economy running smoothly. Inflation is measured as an annual percentage increase. For example, if the inflation rate is 2%, then a basket of goods that would have cost ₹100 a year ago will now cost ₹102. This becomes even more severe in the long run. Right now it is predicted that due to inflation in India the value of ₹1 Crore in 30 years will be worth approximately ₹23 Lakhs according to RBI’s forecast.</p>
      <p class="fo-sm-24">It's generally a good idea to start investing as soon as you have some money to invest. The earlier you start, the more time your investments have to grow. This is because of the power of compound interest, which allows your investments to earn interest on top of interest, resulting in exponential growth over time. Additionally, starting to invest early can help you to get into the habit of saving and investing regularly, which can be beneficial for your financial well-being. That being said, it's also important to make sure that you have enough money to cover your basic needs and any outstanding debts before you start investing.</p>
    `,
			faq: [
				{
					id: 1,
					question: 'Is this Masterclass only for Investors?',
					answer:
							'No, this Masterclass is for anyone who wants a better understanding of how to invest their money. This means it’s for everyone who earns and wants to grow their money sustainably.'
				},
				{
					id: 2,
					question: 'When is the right time to invest?',
					answer:
							'If you’re earning every month or possess a certain amount of capital (usually, cash in hand) then you should invest a percentage of it based on your financial goals and risk appetite.'
				},
				{
					id: 3,
					question: 'Should I only invest and avoid saving?',
					answer:
							'Saving and investing are applicable in different scenarios. You should save when you are absolutely certain you will need the money for something in the near future. Refer to our video on saving v/s investing in the following chapters.'
				},
				{
					id: 4,
					question: 'Will this masterclass teach me how to pick stocks?',
					answer:
							'As a rule of thumb, we recommend not picking stocks without the knowledge and skill to do so. In the videos ahead, we talk about how stock picking is riskier than passive investing and when you can safely invest in individual stocks.'
				},
				{
					id: 5,
					question: 'How much money should I have to start investing?',
					answer:
							'The amount you choose to invest will depend on your income, budget and your financial goals for the future.'
				},
				{
					id: 6,
					question: 'How can I time the market?',
					answer:
							'Our research shows that the cost of waiting for the perfect moment to invest typically exceeds the benefit of even perfect timing. And because timing the market perfectly is nearly impossible, the best strategy for most of us is not to try to market time at all.'
				}
			],
			nextModules: [2, 3]
		},
		{
			id: 2,
			video: 'https://webstatic.stackfinance.co/masterclass/m2.mp4',
			name: 'investing 101',
			thumb: 'https://webstatic.stackfinance.co/masterclass/M2.jpg',
			description:
					'There are two types of investing - Passive & Active. Passive investing is a strategy centred on buying and holding assets for the long term (such as retirement). Active investing involves actively buying and selling assets in the hope of making profits. Studies show that passive investors beat active investors in the long-term 95% of the time. This involves ‘stock-picking’ (a very risky form of investing). We’ll also discuss the main difference between the terms ‘investing’ and ‘saving’ and why they cannot be used interchangeably.',
			slug: 'investing-101',
			summary: `
      <p class="fo-sm-24">Active investing is a strategy where the investor actively buys and sells individual securities in an attempt to outperform the broader market. This is in contrast to passive investing, which involves investing in a diverse range of securities and holding them for the long term, without attempting to time the market or pick individual winners. Active investors typically have a strong conviction about which securities will perform well and will make investment decisions based on their own analysis and research. This approach can potentially lead to higher returns, but it also carries a higher level of risk and requires a significant amount of time and effort to manage.</p>
      <p class="fo-sm-24">Passive investing is a strategy where the investor invests in a diversified portfolio of securities and holds them for the long term, without attempting to time the market or pick individual winners. This is in contrast to active investing, where the investor actively buys and sells individual securities in an attempt to outperform the market. Passive investors typically use index funds, which track a specific market index, such as the S&P 500, and provide a low-cost way to invest in a broad range of stocks or other securities. This approach can provide a good balance of risk and reward, and it requires much less time and effort to manage than active investing.</p>
      <p class="fo-sm-24">Saving and investing are both important for your financial well-being, but they serve different purposes. Saving refers to setting aside money for short-term goals or emergencies while investing refers to using your money to generate a return over the long term. Savings are typically kept in low-risk, liquid accounts, such as savings accounts or money market accounts, and are easily accessible when you need them. Investments, on the other hand, are typically put into higher-risk, higher-return assets, such as stocks, bonds, or real estate, and are intended to grow your wealth over the long term. It's important to have a balance of both saving and investing in order to achieve your financial goals.</p>
    `,
			faq: [
				{
					id: 1,
					question: 'Does investing in big companies guarantee great returns?',
					answer:
							'This is not necessarily true. Due to innovation in every field, the possibility of a new business dominating a sector always exists. Zee Entertainment would’ve been a great investment a decade ago, but now Netflix has taken over the media & entertainment industry.'
				},
				{
					id: 2,
					question: 'What is Passive Investing in simple terms?',
					answer:
							'Passive investing\'s goal is to build wealth gradually. Also known as a buy-and-hold strategy, passive investing means buying a security to own it long-term. Unlike active traders, passive investors do not seek to profit from short-term price fluctuations or market timing.'
				},
				{
					id: 3,
					question: 'Are mutual funds safer than stocks?',
					answer:
							'All investments carry some risk, but mutual funds are typically considered a safer investment than purchasing individual stocks. Since they hold many company stocks within one investment, they offer more diversification than owning one or two individual stocks.'
				},
				{
					id: 4,
					question: 'How is passive investing better?',
					answer:
							'Passive investors beat active stock investors 84% of the time (Source: https://www.valueresearchonline.com/funds/30710/sbi-nifty-50-etf/). You can grow your wealth gradually by doing virtually nothing.'
				},
				{
					id: 5,
					question: 'Can I become good at Stock Picking?',
					answer:
							'As a rule of thumb, we recommend not picking stocks without the knowledge and skill to do so. Many people think that they can make a mint by stock picking—choosing the next big growth stock that will blow up and earn them huge returns. While it\'s always possible that your stock-picking instincts could be on the money, experts typically recommend you stick to passive investing instead.'
				},
				{
					id: 6,
					question: 'Do my investments count as savings?',
					answer:
							'When you invest your money, you are always subjecting it to some amount of risk. This is untrue when you save it instead. The only difference is that your money in investments has a chance to grow at a higher rate of interest.'
				}
			],
			nextModules: [3, 4]
		},
		{
			id: 3,
			video: 'https://webstatic.stackfinance.co/masterclass/m3.mp4',
			name: 'Golden Rules of Investing',
			thumb: 'https://webstatic.stackfinance.co/masterclass/M3.jpg',
			description:
					'Investing to achieve financial freedom is simple when you follow these simple rules. We’ll discuss why it makes sense to start investing right now, no matter how much you’re earning. Why picking stocks should not be your priority, and why you should mostly avoid it. How a diversified portfolio will prepare you for any financial climate. And why keeping costs low and automating your investments are essential for long-term wealth growth. ',
			slug: 'golden-rules-of-investing',
			summary: `
      <p class="fo-sm-24">Financial freedom is the state of having enough wealth to live on without having to work for a living. This typically means having enough passive income or investments to cover all of your living expenses, so that you can live comfortably and not have to worry about money. Financial freedom is not the same as being wealthy, but it can provide a similar level of security and peace of mind. It's important to remember that financial freedom is a personal concept, and what it means to you may be different from what it means to someone else. For some people, financial freedom may mean having the ability to retire early, while for others it may mean being able to pursue their passions and hobbies without worrying about money.</p>
      <p class="fo-sm-24">The earlier you start investing, the more time your money has to grow through compound interest. This means that you can potentially earn a higher return on your investments over the long term. It’s also advisable to not pick stocks. Picking stocks is difficult because the stock market is complex and unpredictable. There are many factors that can affect the performance of a company and its stock, such as changes in the economy, competition, and market trends. Long-term SIPs almost always give better returns than picked stocks in the long run. Diversifying your investment portfolio is important too. It means investing in a variety of different assets, such as stocks, bonds, and real estate, in order to spread out your risk and increase your chances of achieving your financial goals. This is important because it can help to protect your investments from the potential volatility of any one particular asset or market. Finally it’s important to keep your transaction fees and taxation low by investing in tax-saving instruments and automating your investments with Systematic Investment Plans or SIPs.</p>
    `,
			faq: [
				{
					id: 1,
					question: 'What does financial freedom mean?',
					answer:
							'Guaranteed financial freedom is killing debt, having an emergency fund, planning for retirement, and keeping low cost and a diversified portfolio.'
				},
				{
					id: 2,
					question: 'Is it ever too late to start investing?',
					answer:
							'It is never too late to start investing. At every stage of life, we have goals to look forward to that require financial backing in one way or another.'
				},
				{
					id: 3,
					question: 'When is the right time to start investing?',
					answer:
							'Now. If you have cash in hand, a job, or prospects to earn money, you should invest.'
				},
				{
					id: 4,
					question: 'How do I diversify my portfolio based on my goals?',
					answer:
							'Measure your financial goals in terms of the time by which you would like to achieve them and also understand your risk appetite. Based on this you can decide how much you would like to invest in debt and equity.'
				},
				{
					id: 5,
					question: 'How do I know if the fees on my investments are high?',
					answer:
							'When your fees are curbing your returns to the point you are unable to meet your financial goal it means your fees are too high.'
				},
				{
					id: 6,
					question: 'What if I cannot invest every month?',
					answer:
							'A systematic investment plan isn’t the only way to invest. If you are earning on a project basis like a freelancer for example you can still invest a certain amount each time you earn.'
				}
			],
			nextModules: [4, 5]
		},
		{
			id: 4,
			video: 'https://webstatic.stackfinance.co/masterclass/m4.mp4',
			name: 'Road to Financial Freedom',
			thumb: 'https://webstatic.stackfinance.co/masterclass/M4.jpg',
			description:
					'The road to financial freedom is long but simple. There are five things essential to reach it. You must get rid of ‘bad’ debt with extremely high-interest rates. Start building an emergency fund (we’ll discuss how much an emergency fund should be). Invest for the long-term for a successful and happy retirement. Your investments are taxed along with your income, so we’ll discuss how you can minimize this with the right tax-saving instruments. Finally, we’ll show you how you can stop relying on EMIs by starting an SIP today instead.',
			slug: 'road-to-financial-freedom',
			summary: `
      <p class="fo-sm-24">financial freedom may mean having the ability to retire early, while for others it may mean being able to pursue their passions and hobbies without worrying about money.</p>
      <p class="fo-sm-24">The earlier you start investing, the more time your money has to grow through compound interest. This means that you can potentially earn a higher return on your investments over the long term. It’s also advisable to not pick stocks. Picking stocks is difficult because the stock market is complex and unpredictable. There are many factors that can affect the performance of a company and its stock, such as changes in the economy, competition, and market trends. Long-term SIPs almost always give better returns than picked stocks in the long run. Diversifying your investment portfolio is important too. It means investing in a variety of different assets, such as stocks, bonds, and real estate, in order to spread out your risk and increase your chances of achieving your financial goals. This is important because it can help to protect your investments from the potential volatility of any one particular asset or market. Finally it’s important to keep your transaction fees and taxation low by investing in tax-saving instruments and automating your investments with Systematic Investment Plans or SIPs.</p>
    `,
			faq: [
				{
					id: 1,
					question: 'What is high-interest rate debt?',
					answer:
							'An interest rate that is higher than what you could earn by investing or saving is a high-interest rate debt'
				},
				{
					id: 2,
					question: 'What is an Emergency Fund?',
					answer:
							'An emergency fund is a cash reserve that\'s specifically set aside for unplanned expenses or financial emergencies. Some common examples include car repairs, home repairs, medical bills, or a loss of income.'
				},
				{
					id: 3,
					question: 'How can I be prepared for Retirement?',
					answer:
							'Start saving, keep saving, and stick to your goals. Know your retirement needs and begin investing now.'
				},
				{
					id: 4,
					question: 'What is Tax Saving?',
					answer:
							'Tax Savings means the decrease in Tax paid or payable to the relevant Tax Authority (or, without duplication, the increase in any Refund) attributable to a Tax Benefit.'
				},
				{
					id: 5,
					question: 'How does swapping EMIs with SIPs help?',
					answer:
							'Instead of taking a loan and paying endless EMI, make a goal and set up SIPs equivalent to EMIs that you would be paying if you would have taken a loan.'
				},
				{
					id: 6,
					question: 'What is the end goal for financial freedom?',
					answer:
							'The end goal of financial freedom is to be able to spend money on things you want without worrying about money for things you need.'
				}
			],
			nextModules: [4, 5]
		},
		{
			id: 5,
			video: 'https://webstatic.stackfinance.co/masterclass/m5.mp4',
			name: 'When to Invest in Stocks & Crypto',
			thumb: 'https://webstatic.stackfinance.co/masterclass/M5.jpg',
			description:
					'Once you’re on the path to financial freedom, you can experiment with Stocks & Cryptocurrencies. Choosing killer stocks is hard but there are a few ways to do it safely. We’ll discuss the business magnate Warren Buffet’s method of ‘Value Investing’ and how you can do it yourself. Finally, we’ll cover the brief history of cryptocurrencies, where it’s headed and how much of your portfolio allocation should go towards it.',
			slug: 'when-to-invest-in-stock-and-crypto',
			summary: `
      <p class="fo-sm-24">There is no single right way to choose the right stock, and the best approach will depend on your individual investment goals and risk tolerance. However, there are some general guidelines that you can follow to help you make informed investment decisions. This can involve looking at the company's financial performance, analyzing its competitive landscape, and considering its growth potential and future prospects. It's important to have a long-term investment horizon and not get caught up in short-term market fluctuations.</p>
      <p class="fo-sm-24">Value investing is an investment strategy where the investor looks for stocks that are trading for less than their intrinsic value. This means that the investor believes that the stock is undervalued by the market and has the potential to generate a higher return on investment. Value investors typically look for stocks that are out of favour with the market and are trading at a discount to their fundamental value. This approach can potentially lead to higher returns, but it also carries a higher level of risk and requires a significant amount of research and analysis.</p>
      <p class="fo-sm-24">Cryptocurrencies are a relatively new and highly volatile asset class, and they can be risky to invest in. Unlike traditional currencies, which are backed by governments and central banks, cryptocurrencies are decentralized and not backed by any authority. This means that their value is largely determined by supply and demand on the market, and they can be subject to significant fluctuations in value. As a result, investing in cryptocurrencies can carry a high level of risk, and it's important to carefully consider the potential risks and rewards before making any investment decisions.</p>
    `,
			faq: [
				{
					id: 1,
					question: 'What is a multi-bagger stock?',
					answer:
							'A multi-bagger stock is an equity stock which gives a return of more than 100%'
				},
				{
					id: 2,
					question: 'What does value investing mean in simple terms?',
					answer:
							'Warren Buffet always did this, he would analyse stock prices of different companies that interest him, rather than just going with the market sentiment and buying overhyped stocks. He would invest generously, believing that every valuable and strong stock, ALWAYS eventually realises its potential.'
				},
				{
					id: 3,
					question: 'What exactly are cryptocurrencies?',
					answer:
							'A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system.'
				},
				{
					id: 4,
					question: 'Are cryptocurrencies safe to invest in?',
					answer:
							'The money you put into crypto is not safe from value fluctuations. Crypto is a volatile investment. If you\'re looking for a “safe” investment with guaranteed returns, then don\'t invest in Cryptocurrencies.'
				},
				{
					id: 5,
					question: 'How does Stack help with investing?',
					answer:
							'First, we understand your goals and assess your financial profile. Then we use the Smart Stack Approach™ to create your perfect ‘maximum-return-minimum-risk’ portfolio. Finally, we visualise your investment strategy better, with the help of our WealthScience™ technology.'
				},
				{
					id: 6,
					question: 'Will Stack help me invest in Stocks & Crypto? ',
					answer:
							'Stack rewards you with free US stocks worth ₹100 on signing up. For every investment, you can receive up to ₹10,000 as a reward and use it to purchase your choice of US Stocks such as Tesla, Google, Apple, Meta, Amazon or Netflix. Additionally, you get rewards worth ₹500 on referring a friend and your friend gets ₹100 too.'
				}
			],
			nextModules: [5, 1]
		}
	];
}
