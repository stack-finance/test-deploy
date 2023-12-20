<template>
  <div ref="page" class="h-100">
    <img alt="Stack security policy cover image" class="w-100"
         src="https://res.cloudinary.com/stack-finance/image/upload/v1695364786/email-assets-v2/Group_75356_2_3x_yzyz0w.webp" height="250"
    >
    <div class="container px-0 h-100">
      <div class="policy-container position-relative">
        <div class="back-button">
          <NuxtLink to="/">
            <img alt="back-button" src="https://res.cloudinary.com/stack-finance/image/upload/v1669903889/app-assets/v2/new-back_peyttp.png">
          </NuxtLink>
        </div>
        <h1 class="page-heading">
          Security Policy
        </h1>
        <h2 class="visually-hidden">Security policy</h2>

        <section class="policy-section">
          <h3 class="heading">
            Privacy Practices
          </h3>
          <p class="policy-para">
            Keeping our customers’ data protected at all times is our highest priority. This security overview provides
            a high-level overview of the security practices put in place to achieve that objective. Have questions or
            feedback? Feel free to reach out to us at <a href="mailto:security@stackwealth.in">security@stackwealth.in</a>
          </p>
          <p class="policy-para">
            We will never provide any part of your information to anyone unless consented by the user. Please refer to
            our
            <NuxtLink to="/policies/privacy-policy/">
              privacy policy
            </NuxtLink>
            for more information
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            Infrastructure/Peripheral Security:
          </h3>
          <p class="policy-para">
            Stack’s infrastructure is based on Amazon Web Services (AWS). We have robust and scalable multi-level
            architecture using the
            most secure services of AWS. Our infrastructure strictly follows the AWS Well-Architected Framework, making
            stack most secure,
            high-performing, resilient, and efficient.
          </p>
          <p class="policy-para">
            All of our servers are kept under Virtual Private Cloud (VPC) and environments are isolated using
            sub-netting. The servers are
            physically located in the AWS Asia Pacific Region (India).
          </p>
          <p class="policy-para">
            We have a ‘Network and Application Firewall’ in place and have implemented industry best practices like
            OWASP guidelines to make
            it secure. We have also deployed the latest version of ModSecurity on Web Application Firewall, to mitigate
            new immersing
            attacks on public applications.
          </p>
          <p class="policy-para">
            Distributed Denial-of-Service (DDoS) attacks are prevented using the multi-level defence firewalls.
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            Data Security:
          </h3>
          <p class="policy-para">
            All users' data is managed in the encrypted format at all times. This encryption on data is applied at both
            in-transit
            and in-rest.
          </p>
          <p class="policy-para">
            The transmission of data is encrypted by a bank-grade TLS encryption algorithm, which helps in protecting
            users' data from
            Man-in-the-middle and eavesdropping attacks.
          </p>
          <p class="policy-para">
            At the data storage level, we are conscious of data atomicity, data consistency, data integrity, and
            durability of the data. We
            have also enabled activity logging and auditing for swift intrusion detection into the system. We utilise
            data replication for
            data resiliency and disaster recovery as well as backup testing for data reliability.
          </p>
          <p class="policy-para">
            Additionally, multi-level role-based access control is implemented to secure users' data. Internally, we
            limit the access of
            development server through bundling identity management and secured multi-tunnel private VPN channels.
          </p>
          <p class="policy-para">
            Fore more information, please check the
            <NuxtLink to="/policies/privacy-policy/">
              privacy policy.
            </NuxtLink>
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            Application Security:
          </h3>
          <p class="policy-para">
            We have implemented strict password policy and a mandatory Two-Factor Authentication (2FA) protocol for user
            login.
            Additionally, location-based security control is also incorporated to restrict unauthorised access to the
            application.
          </p>
          <p class="policy-para">
            All data transfers back and forth needs to pass through our data validation layer to protect the application
            from the malicious
            code injections.
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            System Breach Detection and PEN-Testing:
          </h3>
          <p class="policy-para">
            Our internal team as well as external stakeholders support us in undertaking periodic security and
            vulnerability testing/
            assessments, utilising standardised products for both manual and automated testing.
          </p>
          <p class="policy-para">
            We have also engaged CERT-IN certified auditors for performing external testing and audits at regular
            intervals.
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            Standards and Compliance's:
          </h3>
          <p class="policy-para">
            We have implemented the laid out compliance requirements and standards by the National Payment Corporation
            of India (NPCI) for
            the Bharat Bill Payment System (BBPS). We are also compliant to the “Data Localisation” requirements as per
            the guidelines of
            the Reserve Bank of India (RBI).
          </p>
        </section>

        <section class="policy-section">
          <h3 class="heading">
            Responsible Disclosure:
          </h3>
          <p class="policy-para">
            We are committed to keeping our users' data safe and secure. Keeping up with our users' trust, we have
            implemented the highest
            grade of security standards and perform vulnerability scans, conduct penetration tests, and apply security
            patches to our
            systems periodically.
          </p>
          <p class="policy-para">
            Despite our best efforts, if you're a tech enthusiast or a researcher and identify any potential security
            vulnerability issue,
            we encourage you to report the same responsibly by writing to us at
            <a href="mailto:security@stackfinance.co">security@stackfinance.co</a> along with supporting
            screenshots/videos and detailed
            steps required to reproduce the vulnerability.
          </p>
          <p class="policy-para">
            We shall put in our best efforts to address and fix the issue within a reasonable time frame, requesting you
            not to disclose it
            publicly in the meantime.
          </p>
          <p class="policy-para">
            Note: While we appreciate your effort, if the vulnerability has been used for unlawful gains, we might take
            legal action against you.
          </p>
          <p class="policy-para">
            We will send you a response as soon as possible—usually within 3 days. Our response will indicate how we
            will proceed with your case. We will keep you informed of our progress.
          </p>
          <p class="policy-para">
            Your report will be treated confidentially. Your personal data is not usually shared with third parties, the
            exception to this being a legal obligation. When communicating about the vulnerability, we will mention your
            name as the discoverer (if we have your permission). If you adhere to these guidelines, we will not take any
            legal action on this report.
          </p>
        </section>
      </div>
    </div>
    <Footer :is-mobile="isMobile"></Footer>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
import { computed } from '@vue/reactivity';

definePageMeta({
  name: 'SecurityPolicy',
  layout: 'policies',
});

useHead({
  title: 'StackWealth Security Policy: Your Online Safety Matters',
  meta: [
    {
      name: 'description',
      content: 'Learn about StackWealth\'s stringent security measures and policies to ensure your financial data is safeguarded.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://stackwealth.in/policies/security-policy/`
    }
  ],
});

let size = ref(1200);
const page = ref(null);
onMounted(() => {
  if (page.value) {
    size.value = page.value.clientWidth;
  }
});

const isMobile = computed(() => size.value < 768).value;
</script>
