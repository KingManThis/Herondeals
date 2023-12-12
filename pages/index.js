import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
    // You can access form data using event.target.elements
    const firstName = event.target.elements.firstName.value;
    const email = event.target.elements.email.value;

    // Do something with the form data, e.g., send it to a server
    console.log('Submitted:', { firstName, email });
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Herondeals!" />
        <p className="description">
          Automation at its best <code>Business Solutions</code>
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <button type="submit">Submit</button>
        </form>

      </main>

      <Footer />
    </div>
  );
}
