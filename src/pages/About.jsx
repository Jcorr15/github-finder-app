function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        Simple web application built using react that allows users to search up
        github profiles, and displays the selected profile data in a user
        friendly way. The app uses Github's REST api to fetch user profile data.
      </p>
      <p className="text-lg">
        Version <span className="text-purple-700">1.0.0</span>
      </p>
      <p className="text-lg">
        Created By:&nbsp;
        <a
          className="text-purple-700"
          href="https://www.linkedin.com/in/jovan-corri-343978210/"
          target="_blank"
          rel="noreferrer"
        >
          Jovan Corri
        </a>
      </p>
    </div>
  );
}

export default About;
