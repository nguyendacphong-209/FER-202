import './App.css';

function App() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  const { name, category } = companies[0];
  const newObject = {
    name,
    category,
    print: function() {
      console.log(`Name: ${this.name}, Category: ${this.category}`);
    }
  };

  // Calling the print method
  newObject.print();
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const random= [1,2,3,4];
  const filteredCompanies = companies.filter(company => company.start > 1987);
  const retailCompanies = companies
    .filter(company => company.category === "Retail")
    .map(company => ({
      ...company,
      start: company.start + 1 // Increment the start year by 1
    }));
  const sortedCompanies = companies.sort((a, b) => a.end - b.end);
  const sortedAges = ages.sort((a, b) => b - a);
  const totalAge = ages.reduce((accumulator, currentAge) => accumulator + currentAge, 0);
  const sumNumber = random.reduce((acc, num) => acc + num, 0);
  return (
    <div>
      <h1>Danh sách các công ty</h1>
      <ul>
        {
          companies.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))
        }
      </ul>

      <h2> Danh sach cac cong ty start sau 1987 </h2>
      <ul>
        {
          filteredCompanies.map((company, index) => (
            <li key={index}>{company.name}</li>
          ))
        }
      </ul>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {retailCompanies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>All Companies Sorted by End Year</h4>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {sortedCompanies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>Ages Sorted in Descending Order</h5>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedCompanies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{sortedAges[index]}</td> {/* Display corresponding age */}
            </tr>
          ))}
        </tbody>
      </table>

      <h6>
      <p>Total Age: {totalAge}</p>
      </h6>

      <h7>New Object with Print Method</h7>
      <p>Name: {newObject.name}</p>
      <p>Category: {newObject.category}</p>
    </div>
  );
}

export default App;

