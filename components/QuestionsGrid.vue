<template>
  <div class="container">
    <div v-if="index === 0" class="questions-grid">
      <div class="faq-item">
        <h4 class="faq-item-ques">How does Stack work?</h4>
        <p class="faq-item-ans">
          Stack helps simplify investing for you! After you answer a couple of questions, we curate the perfect
          investing strategy for you using the Smart Stack Approach™ - based on a nobel-prize winning research.
        </p>
        <ul class="faq-item-list">
          <li>Select a goal/purpose you want to invest for</li>
          <li>Add time period, target amount, if any</li>
          <li>Stack analyses the data and your profile to curate a customised portfolio for YOU</li>
        </ul>
        <p class="faq-item-ans">
          <a href="https://stackwealth.in/blogs/introducing-stacks">Learn more</a>
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Why should I trust Stack with my money?</h4>
        <p class="faq-item-ans">
          Stack takes your information and property seriously. We encrypt all user data with bank grade TLS hack-proof
          security and safeguard our app through MFA (Multi-Factor Authentication) to protect your sensitive
          information. We are registered with AMFI (ARN Holder Number - 171554) and SEBI and comply with all of their
          security guidelines.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Where does my money go?</h4>
        <p class="faq-item-ans">
          Your money is invested into diversified portfolios of funds to earn superior risk-adjusted returns. These
          funds form your Stacks that are personalised to your life goals.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Is there any fee for using Stack?</h4>
        <p class="faq-item-ans">
          Stack charges NO fees for the usage of our app!
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Can I withdraw my money anytime I want?</h4>
        <p class="faq-item-ans">
          Yes! The money you invest in your Stacks can be withdrawn anytime. There is no lock-in period for any Stack,
          except tax saver as it has a lock-in period of 3 years
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">How to create account on Stack?</h4>
        <p class="faq-item-ans">
          Opening an account on Stack is very simple.
        </p>
        <ul class="faq-item-list">
          <li>Download and install the app</li>
          <li>Sign up with your mobile number and verify it with OTP.</li>
          <li>Verify your email address from the home screen</li>
          <li>Complete your KYC</li>
        </ul>
        <p class="faq-item-ans">
          ... And you are done!
          <br/>
          You may also take the personality quiz to  answer a few questions to understand your risk profile, so we can recommend portfolios accordingly.
        </p>
      </div>
    </div>
    <div v-if="index === 1" class="questions-grid">
      <div class="faq-item">
        <h4 class="faq-item-ques">What are Rules on Stack?</h4>
        <p class="faq-item-ans">
          Rules make investing fun and automated for you. They are different ways to help you systematically invest in
          your Stacks and are personalised to your lifestyle. Examples of rules are Set & Forget, Round Up, Boost etc.
          <a href="https://stackwealth.in/blogs/investing-rules">Learn more</a>
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">How does 'Boost' work?</h4>
        <p class="faq-item-ans">
          Boost is a one-time lump-sum investment towards your Stack to give you an extra push towards your goals.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">How does Set & Forget work?</h4>
        <p class="faq-item-ans">
          Set & Forget helps you make automated investments towards your goal. By adding Set & forget to your Stack, you
          can make recurring payments on a date and amount of your choice completely automatically.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">How does Payday work?</h4>
        <p class="faq-item-ans">
          Payday helps you automatically put aside a dedicated percentage of your salary, as soon as it
          credits every month.
        </p>
      </div>
    </div>
    <div v-if="index === 2" class="questions-grid">
      <div class="faq-item">
        <h4 class="faq-item-ques">How does the Stack reward program work?</h4>
        <p class="faq-item-ans">
          The Stack rewards you with free US stocks and Crypto at EACH step. Here’s how you can get them too:
        </p>
        <ul class="faq-item-list">
          <li>Get assured stock and crypto rewards worth Rs. 10 on signing up</li>
          <li>Invest in your goals via the Stack app, for every investment you receive an ‘Unlock’</li>
          <li>Go to the rewards section of the app and swipe ‘Unlock’ on US stocks and Crypto</li>
          <li>
            Receive up to INR 10,000 and use it to purchase your fav US stocks such as Tesla, Google, Apple, or crypto
            like Bitcoin, Ethereum, Solana.
          </li>
        </ul>
        <p class="faq-item-ans">
          Additionally, you get stock and crypto rewards worth Rs. 100 on referring a friend.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Do I receive any reward for downloading the Stack app?</h4>
        <p class="faq-item-ans">
          Yes, you do! After successfully signing up and creating your first goal, you will receive a complimentary
          ‘Unlock’ which you can convert to US stocks and crypto of your choice. This will reflect after you make your
          first investment.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Why have I not received any rewards even after investing?</h4>
        <p class="faq-item-ans">
          You will receive an ‘Unlock’ for claiming US stocks and crypto after your units are allotted. This may take
          2-3 business days, but rest assured your rewards are on the way!
        </p>
      </div>
    </div>
    <div v-if="index === 3" class="questions-grid">
      <div class="faq-item">
        <h4 class="faq-item-ques">How can I earn free US stocks and crypto on Stack?</h4>
        <p class="faq-item-ans">
          To get free US stocks and crypto just follow the steps below:
        </p>
        <ul class="faq-item-list">
          <li>Refer Stack to a friend</li>
          <li>Allow them to download and invest in their first goal</li>
          <li>Receive an ‘Unlock’ worth INR 100 to purchase any US stocks or crypto of your choice</li>
          <li>
            Additionally, your friend enjoys an ‘Unlock’ worth INR 50 on US stocks and Crypto as well
          </li>
        </ul>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">What is a successful referral?</h4>
        <p class="faq-item-ans">
          A successful referral on Stack is when your friend uses your social media links or unique referral code to
          download the app, and makes their first investment via Stack.
        </p>
      </div>
    </div>
    <div v-if="index === 4" class="questions-grid">
      <div class="faq-item">
        <h4 class="faq-item-ques">Why do I need to be KYC verified to use Stack?</h4>
        <p class="faq-item-ans">
          Know your customer or KYC is a mandatory process required by the SEBI if you wish to start investing in India.
          It helps centralized authorities like the RBI and SEBI to authenticate your identity and make sure you are
          above the legal age (18 years ago) to start investing.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">I have invested in Mutual Funds before, do I still need KYC?</h4>
        <p class="faq-item-ans">
          If you are an existing mutual fund investor, we will validate your KYC status against your PAN number. If all
          the required details are available, you do not need to do KYC again. If any of your details are missing,
          however, you may be needed to submit those additional details.
        </p>
      </div>
      <div class="faq-item">
        <h4 class="faq-item-ques">Are my KYC details safe with Stack?</h4>
        <p class="faq-item-ans">
          Your private and confidential information is secure on Stack and we neither store nor share any of your
          details required during the KYC process.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({ index: { type: Number, required: true } });
</script>

<style lang="scss">
@import 'assets/scss/helpers/variables';

.questions-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 24px;

  .faq-item {

    &-ques {
      font-weight: bold;
    }

    &-ans, &-list {
      color: $text-color-lt;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    grid-column-gap: 48px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
