function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        Simple web application built using react that allows users to search up
        github profiles, and displays the selected profile data in a user
        friendly way. The app uses Github's REST api to fetch user profile data.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
