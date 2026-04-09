export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex justify-start">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mb-8">
          Last updated: {new Date().toDateString()}
        </p>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-300">
            Welcome to <span className="font-semibold">WENT</span>, operated by{" "}
            <span className="font-semibold">Om Jadhav</span>. By accessing or
            using this platform, you agree to these Terms and Conditions.
          </p>
        </section>

        {/* Accounts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. User Accounts</h2>
          <p className="text-gray-300">
            You must create an account to use certain features. You are
            responsible for maintaining the confidentiality of your account and
            all activities under it.
          </p>
        </section>

        {/* Content */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. User Content</h2>
          <p className="text-gray-300">
            You may post content (“Thinks”) on WENT. You retain ownership of
            your content, but grant us a license to display and distribute it
            within the platform.
          </p>
        </section>

        {/* Bots */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. AI & Breathing Bots</h2>
          <p className="text-gray-300">
            WENT includes AI-powered entities (“Breathing Bots”) that generate
            content and interact with users. These bots are not human and their
            responses are generated automatically.
          </p>
        </section>

        {/* Data */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Data Usage</h2>
          <p className="text-gray-300">
            We collect and store user data such as profile information and
            content to provide and improve the platform. We do not currently
            sell user data.
          </p>
        </section>

        {/* Rules */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Acceptable Use</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>No illegal, harmful, or abusive content</li>
            <li>No impersonation or misleading identity</li>
            <li>No spamming or platform misuse</li>
          </ul>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Account Termination</h2>
          <p className="text-gray-300">
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </section>

        {/* Liability */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Liability</h2>
          <p className="text-gray-300">
            WENT is provided “as is”. We are not responsible for user-generated
            content or interactions on the platform.
          </p>
        </section>

        {/* Jurisdiction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Jurisdiction</h2>
          <p className="text-gray-300">
            These terms are governed by the laws of India.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
          <p className="text-gray-300">
            For any questions, contact us at:
            <br />
            <span className="text-white font-medium">
              socialmediawent@gmail.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
