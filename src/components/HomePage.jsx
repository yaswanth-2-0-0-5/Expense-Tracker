// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { CSVLink } from 'react-csv'; // Import CSVLink
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import styles from '../components/HomePage.module.css';

// const categories = [
//   'Food',
//   'Social Life',
//   'Pets',
//   'Transport',
//   'Culture',
//   'Household',
//   'Apparel',
//   'Health',
//   'Education',
//   'others',
// ];

// const HomePage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [calculatorInput, setCalculatorInput] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [items, setItems] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
//   const [showCustomInput, setShowCustomInput] = useState(false);
//   const [note, setNote] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [budget, setBudget] = useState('');
//   const [budgetExceeded, setBudgetExceeded] = useState(false);
//   const navigate = useNavigate(); // Call useNavigate to get the navigate function
//   const [loading, setLoading] = useState(false);

//   const handleCategoryClick = (category) => {
//     if (category === 'others') {
//       setShowCustomInput(true);
//       setSelectedCategory('');
//     } else {
//       setShowCustomInput(false);
//       setSelectedCategory(category);
//     }
//   };


//   const handleCustomCategoryChange = (e) => {
//     setCustomCategory(e.target.value);
//   };

//   const handleAddCustomCategory = () => {
//     if (customCategory) {
//       setSelectedCategory(customCategory);
//       setCustomCategory('');
//       setShowCustomInput(false);
//     }
//   };

//   const handleCalculatorInputChange = (value) => {
//     setCalculatorInput(value);
//     try {
//       setAmount(eval(value).toString());
//     } catch (e) {
//       setAmount('');
//     }
//   };

//   const handleSubmit = () => {
//     const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
//     if (selectedCategory && amount && date && name && paymentMethod) {
//       const newItem = { name, amount: parseFloat(amount), date, category: selectedCategory, note, paymentMethod };
//       const newItems = [...items, newItem];
//       const newTotalAmount = newItems.reduce((acc, item) => acc + item.amount, 0);

//       setItems(newItems);
//       setName('');
//       setAmount('');
//       setDate('');
//       setSelectedCategory('');
//       setNote('');
//       setPaymentMethod('');
//       setCalculatorInput('');

//       if (budget && newTotalAmount > parseFloat(budget)) {
//         setBudgetExceeded(true);
//       } else {
//         setBudgetExceeded(false);
//       }
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//     const totalAmount = updatedItems.reduce((acc, item) => acc + item.amount, 0);
//     if (budget && totalAmount <= parseFloat(budget)) {
//       setBudgetExceeded(false);
//     }
//   };

//   const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
//   const remainingBalance = budget ? (parseFloat(budget) - totalAmount).toFixed(2) : null;

//   const handleLearnMoreClick = () => {
//     navigate('/about');
//   };

  
//   const exportPDF = () => {
//     setLoading(true); // Show loading animation
//     const input = document.getElementById('pdf-content');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       const imgWidth = 210; // A4 width in mm
//       const pageHeight = 295; // A4 height in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;

//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       while (heightLeft >= 0) {
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       pdf.save('expenses.pdf');
//       setLoading(false); // Hide loading animation
//     });
//   };

//   const csvData = items.map(item => ({
//     Date: item.date,
//     Category: item.category,
//     Amount: item.amount,
//     Note: item.note,
//     PaymentMethod: item.paymentMethod,
//   }));

//   const csvHeaders = [
//     { label: 'Date', key: 'Date' },
//     { label: 'Category', key: 'Category' },
//     { label: 'Amount', key: 'Amount' },
//     { label: 'Note', key: 'Note' },
//     { label: 'Payment Method', key: 'PaymentMethod' },
//   ];

//   return (
//     <div className={styles.homePage}>
//       <header className={styles.header}>
//         <h1>EXPENSE TRACKER APP</h1>
//       </header>
//       <main className={styles.main}>
//         <div className={styles.mainContent}>
//           <div className={styles.categoriesSection}>
//             <h2>Categories</h2>
//             <div className={styles.categories}>
//               {categories.map((category, index) => (
//                 <div
//                   key={index}
//                   className={`${styles.categoryCard} ${styles[category.toLowerCase().replace(/ /g, '-')]} ${selectedCategory === category ? styles.selected : ''}`}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <div className={styles.categoryName}>{category}</div>
//                   <div className={styles.categoryImage}></div>
//                 </div>
//               ))}
//             </div>
//             {showCustomInput && (
//               <div className={styles.customCategorySection}>
//                 <input
//                   type="text"
//                   value={customCategory}
//                   onChange={handleCustomCategoryChange}
//                   placeholder="Enter custom category"
//                 />
//                 <button onClick={handleAddCustomCategory}>Add</button>
//               </div>
//             )}
//             {selectedCategory && !showCustomInput && (
//               <div className={styles.selectedCategory}>
//                 <h3>{selectedCategory}</h3>
//               </div>
//             )}
//           </div>
//           <div className={styles.detailsSection}>
//             <div className={styles.inputBox}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className={styles.budgetTrackingSection}>
//               <label htmlFor="budget">Budget:</label>
//               <input
//                 type="number"
//                 id="budget"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 placeholder="Enter your budget"
//               />
//               {budgetExceeded && (
//                 <div className={styles.alert}>
//                   <p>Alert: Your expenses have exceeded the budget!</p>
//                 </div>
//               )}
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="amount">Amount:</label>
//               <input
//                 type="text"
//                 id="calculatorInput"
//                 value={calculatorInput}
//                 onChange={(e) => handleCalculatorInputChange(e.target.value)}
//                 placeholder="Calculate and enter amount"
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="note">Note:</label>
//               <input
//                 type="text"
//                 id="note"
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 placeholder="Enter note"
//               />
//             </div>

//             <div className={styles.paymentMethodSection}>
//               <label>Payment Method:</label>
//               <div className={styles.paymentMethods}>
//                 <div>
//                   <input
//                     type="radio"
//                     id="cash"
//                     name="paymentMethod"
//                     value="Cash"
//                     checked={paymentMethod === 'Cash'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   <label htmlFor="Cash">Cash</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id="Account"
//                     name="paymentMethod"
//                     value="Account"
//                     checked={paymentMethod === 'Account'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   <label htmlFor="Account">Account</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id="card"
//                     name="paymentMethod"
//                     value="Card"
//                     checked={paymentMethod === 'Card'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   <label htmlFor="Card">Card</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id="other"
//                     name="paymentMethod"
//                     value="Other"
//                     checked={paymentMethod === 'Other'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   <label htmlFor="other">Other</label>
//                 </div>
//               </div>
//             </div>
//             <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
//           </div>
//         </div>
//         <div className={styles.tableSection} id="pdf-content">
//           <div className={styles.tableHeader}>
//             <div>Category</div>
//             <div>Amount</div>
//             <div>Date</div>
//             <div>Note</div>
//             <div>Payment Method</div>
//             <div>Delete</div>
//           </div>
//           <div className={styles.tableBody}>
//             {items.map((item, index) => (
//               <div key={index} className={styles.tableRow}>
//                 <div>{item.category}</div>
//                 <div>₹{item.amount.toFixed(2)}</div>
//                 <div>{item.date}</div>
//                 <div>{item.note}</div>
//                 <div>{item.paymentMethod}</div>
//                 <div>
//                   <button onClick={() => handleDelete(index)} className={styles.deleteButton}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className={styles.totalAmountSection}>
//             <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
//             {budget && (
//               <h3>Remaining Balance: ₹{remainingBalance >= 0 ? remainingBalance : 0}</h3>
//             )}
//           </div>
          
//         </div>
//         <div className={styles.exportButtonsContainer}></div>
//         <button onClick={exportPDF} className={styles.exportButton}>
//         Export to PDF
//       </button>

//       <CSVLink
//           data={csvData}
//           headers={csvHeaders}
//           filename={"expenses.csv"}
//           className={styles.exportButton}
//         >
//           Export to CSV
//         </CSVLink>
//       {loading && (
//         <div className={styles.loadingOverlay}>
//           <div className={styles.spinner}></div>
//         </div>
//       )}



//         <div className={styles.middleContent}>
//           <h2>Manage Your Expenses Smartly</h2>
//           <p>With our Expense Tracker, you can easily categorize and track your expenses, set budgets, and get insights into your spending habits.</p>
          
//           <div className={styles.features}>
//             <h3>Features:</h3>
//             <ul>
//               <li>Easy categorization of expenses</li>
//               <li>Real-time spending analytics</li>
//               <li>Budget tracking and alerts</li>
//               <li>Secure and private data handling</li>
//               <li>Customizable reports</li>
//             </ul>
//           </div>

//           <div className={styles.testimonials}>
//             <h3>What Our Users Say:</h3>
//             <div className={styles.testimonial}>
//               <p>"This app has transformed the way I manage my finances. It's simple and intuitive!"</p>
//               <span>- Alex J.</span>
//             </div>
//             <div className={styles.testimonial}>
//               <p>"A must-have tool for anyone looking to get their spending under control."</p>
//               <span>- Sarah K.</span>
//             </div>
//           </div>
//           <button className={styles.learnMoreButton} onClick={handleLearnMoreClick}>
//             Learn More
//           </button>
//           <br></br><br></br>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <div className={styles.footerContent}>
//           <div className={styles.footerSection}>
//             <h4>About Us</h4>
//             <p>We strive to make managing your finances simple and intuitive. Our app is designed to provide you with valuable insights and tools to help you achieve your financial goals.</p>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>Quick Links</h4>
//             <ul className={styles.quickLinks}>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/contact">Contact Us</a></li>
//               <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//               <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
//             </ul>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>Subscriptions</h4>
//             <p>Unlock Premium Features
//             Upgrade to our plans for advanced tools and insights.</p>
//             <form className={styles.newsletterForm}>
//               <input type="email" placeholder="Enter your email" required />
//               {/* <button type="submit">Subscribe</button> */}
//               <Link to="/subscribe" className={styles.loginButton}>Subscribe</Link>
//             </form>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>Follow Us</h4>
//             <div className={styles.socialMedia}>
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Facebook</a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Twitter</a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>LinkedIn</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { CSVLink } from 'react-csv'; // Import CSVLink
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import styles from '../components/HomePage.module.css';
// import MiddleHome from './MiddleHome'; // Import MiddleHome component
// import Footer from './Footer'; // Import Footer component


// const categories = [
//   'Food', 'Social Life', 'Pets', 'Transport', 'Culture',
//   'Household', 'Apparel', 'Health', 'Education', 'Others'
// ];

// const HomePage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [calculatorInput, setCalculatorInput] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [items, setItems] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
//   const [showCustomInput, setShowCustomInput] = useState(false);
//   const [note, setNote] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [budget, setBudget] = useState('');
//   const [budgetExceeded, setBudgetExceeded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleCategoryClick = (category) => {
//     if (category === 'Others') {
//       setShowCustomInput(true);
//       setSelectedCategory('');
//     } else {
//       setShowCustomInput(false);
//       setSelectedCategory(category);
//     }
//   };

//   const handleCustomCategoryChange = (e) => setCustomCategory(e.target.value);

//   const handleAddCustomCategory = () => {
//     if (customCategory) {
//       setSelectedCategory(customCategory);
//       setCustomCategory('');
//       setShowCustomInput(false);
//     }
//   };

//   const handleCalculatorInputChange = (value) => {
//     setCalculatorInput(value);
//     try {
//       setAmount(eval(value).toString());
//     } catch {
//       setAmount('');
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedCategory && amount && date && name && paymentMethod) {
//       const newItem = {
//         name, amount: parseFloat(amount), date, category: selectedCategory, note, paymentMethod
//       };
//       const newItems = [...items, newItem];
//       const newTotalAmount = newItems.reduce((acc, item) => acc + item.amount, 0);

//       setItems(newItems);
//       setName('');
//       setAmount('');
//       setDate('');
//       setSelectedCategory('');
//       setNote('');
//       setPaymentMethod('');
//       setCalculatorInput('');

//       setBudgetExceeded(budget && newTotalAmount > parseFloat(budget));
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//     const totalAmount = updatedItems.reduce((acc, item) => acc + item.amount, 0);
//     setBudgetExceeded(budget && totalAmount > parseFloat(budget));
//   };

//   const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
//   const remainingBalance = budget ? (parseFloat(budget) - totalAmount).toFixed(2) : null;

//   const handleLearnMoreClick = () => navigate('/about');

//   const exportPDF = () => {
//     setLoading(true);
//     const input = document.getElementById('pdf-content');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       const imgWidth = 210; // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;

//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       heightLeft -= pdf.internal.pageSize.height;

//       while (heightLeft >= 0) {
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
//         heightLeft -= pdf.internal.pageSize.height;
//       }

//       pdf.save('expenses.pdf');
//       setLoading(false);
//     });
//   };

//   const csvData = items.map(item => ({
//     Date: item.date,
//     Category: item.category,
//     Amount: item.amount,
//     Note: item.note,
//     PaymentMethod: item.paymentMethod,
//   }));

//   const csvHeaders = [
//     { label: 'Date', key: 'Date' },
//     { label: 'Category', key: 'Category' },
//     { label: 'Amount', key: 'Amount' },
//     { label: 'Note', key: 'Note' },
//     { label: 'Payment Method', key: 'PaymentMethod' },
//   ];

//   return (
//     <div className={styles.homePage}>
//       <header className={styles.header}>
//         <h1>EXPENSE TRACKER APP</h1>
//       </header>
//       <main className={styles.main}>
//         <div className={styles.mainContent}>
//           <div className={styles.categoriesSection}>
//             <h2>Categories</h2>
//             <div className={styles.categories}>
//               {categories.map((category) => (
//                 <div
//                   key={category}
//                   className={`${styles.categoryCard} ${styles[category.toLowerCase().replace(/ /g, '-')]} ${selectedCategory === category ? styles.selected : ''}`}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <div className={styles.categoryName}>{category}</div>
//                   <div className={styles.categoryImage}></div>
//                 </div>
//               ))}
//             </div>
//             {showCustomInput && (
//               <div className={styles.customCategorySection}>
//                 <input
//                   type="text"
//                   value={customCategory}
//                   onChange={handleCustomCategoryChange}
//                   placeholder="Enter custom category"
//                 />
//                 <button onClick={handleAddCustomCategory}>Add</button>
//               </div>
//             )}
//             {selectedCategory && !showCustomInput && (
//               <div className={styles.selectedCategory}>
//                 <h3>{selectedCategory}</h3>
//               </div>
//             )}
//           </div>
//           <div className={styles.detailsSection}>
//             <div className={styles.inputBox}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className={styles.budgetTrackingSection}>
//               <label htmlFor="budget">Budget:</label>
//               <input
//                 type="number"
//                 id="budget"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 placeholder="Enter your budget"
//               />
//               {budgetExceeded && (
//                 <div className={styles.alert}>
//                   <p>Alert: Your expenses have exceeded the budget!</p>
//                 </div>
//               )}
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="amount">Amount:</label>
//               <input
//                 type="text"
//                 id="calculatorInput"
//                 value={calculatorInput}
//                 onChange={(e) => handleCalculatorInputChange(e.target.value)}
//                 placeholder="Calculate and enter amount"
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="note">Note:</label>
//               <input
//                 type="text"
//                 id="note"
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 placeholder="Enter note"
//               />
//             </div>
//             <div className={styles.paymentMethodSection}>
//               <label>Payment Method:</label>
//               <div className={styles.paymentMethods}>
//                 {['Cash', 'Account', 'Card', 'Other'].map(method => (
//                   <div key={method}>
//                     <input
//                       type="radio"
//                       id={method.toLowerCase()}
//                       name="paymentMethod"
//                       value={method}
//                       checked={paymentMethod === method}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <label htmlFor={method.toLowerCase()}>{method}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
//           </div>
//         </div>
//         <div className={styles.tableSection} id="pdf-content">
//           <div className={styles.tableHeader}>
//             <div>Category</div>
//             <div>Amount</div>
//             <div>Date</div>
//             <div>Note</div>
//             <div>Payment Method</div>
//             <div>Delete</div>
//           </div>
//           <div className={styles.tableBody}>
//             {items.map((item, index) => (
//               <div key={index} className={styles.tableRow}>
//                 <div>{item.category}</div>
//                 <div>{item.amount}</div>
//                 <div>{item.date}</div>
//                 <div>{item.note}</div>
//                 <div>{item.paymentMethod}</div>
//                 <div className={styles.delete}>
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <br></br><br></br><br></br>
//         <div className={styles.summarySection}>
//           <div>Total Amount Spent: {totalAmount.toFixed(2)}</div>
//           {budget && <div>Remaining Balance: {remainingBalance}</div>}
//         </div>
//         <div className={styles.exportSection}>
//           <div className={styles.exportButton}>
//             <CSVLink
//               data={csvData}
//               headers={csvHeaders}
//               filename="expenses.csv"
//               className={styles.csvButton}
//             >
//               {loading ? 'Loading...' : 'Export to CSV'}
//             </CSVLink>
//           </div>
//           <div className={styles.exportButton}>
//             <button
//               className={styles.pdfButton}
//               onClick={exportPDF}
//               disabled={loading}
//             >
//               {loading ? 'Loading...' : 'Export to PDF'}
//             </button>
//           </div>
//         </div>
//       </main>
//       <MiddleHome handleLearnMoreClick={handleLearnMoreClick} /> {/* Add MiddleHome here */}
//       <Footer /> {/* Add Footer here */}
//     </div>
//   );
// };

// export default HomePage;









// import React, { useState } from 'react';
// import { CSVLink } from 'react-csv'; // Import CSVLink
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import axios from 'axios';
// import styles from '../components/HomePage.module.css';
// import MiddleHome from './MiddleHome'; // Import MiddleHome component
// import Footer from './Footer'; // Import Footer component

// const categories = [
//   'Food', 'Social Life', 'Pets', 'Transport', 'Culture',
//   'Household', 'Apparel', 'Health', 'Education', 'Others'
// ];

// const HomePage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [calculatorInput, setCalculatorInput] = useState('');
//   const [date, setDate] = useState('');
//   const [name, setName] = useState('');
//   const [items, setItems] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
//   const [showCustomInput, setShowCustomInput] = useState(false);
//   const [note, setNote] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [budget, setBudget] = useState('');
//   const [budgetExceeded, setBudgetExceeded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleCategoryClick = (category) => {
//     if (category === 'Others') {
//       setShowCustomInput(true);
//       setSelectedCategory('');
//     } else {
//       setShowCustomInput(false);
//       setSelectedCategory(category);
//     }
//   };

//   const handleCustomCategoryChange = (e) => setCustomCategory(e.target.value);

//   const handleAddCustomCategory = () => {
//     if (customCategory) {
//       setSelectedCategory(customCategory);
//       setCustomCategory('');
//       setShowCustomInput(false);
//     }
//   };

//   const handleCalculatorInputChange = (value) => {
//     setCalculatorInput(value);
//     try {
//       setAmount(eval(value).toString());
//     } catch {
//       setAmount('');
//     }
//   };

//   const handleSubmit = async () => {
//     const newItem = {
//       name,
//       amount: parseFloat(amount),
//       date,
//       category: selectedCategory,
//       note,
//       paymentMethod
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/api/expenses', newItem);
//       const newItems = [...items, response.data];
//       setItems(newItems);

//       // Resetting form fields after submission
//       setName('');
//       setAmount('');
//       setDate('');
//       setSelectedCategory('');
//       setNote('');
//       setPaymentMethod('');
//       setCalculatorInput('');
//     } catch (error) {
//       console.error('Error adding expense:', error);
//     }
//   };

//   const handleDelete = async (index, id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/expenses/${id}`);
//       const updatedItems = items.filter((_, i) => i !== index);
//       setItems(updatedItems);
//       const totalAmount = updatedItems.reduce((acc, item) => acc + item.amount, 0);
//       setBudgetExceeded(budget && totalAmount > parseFloat(budget));
//     } catch (error) {
//       console.error('Error deleting expense:', error);
//     }
//   };

//   const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
//   const remainingBalance = budget ? (parseFloat(budget) - totalAmount).toFixed(2) : null;

//   const exportPDF = () => {
//     setLoading(true);
//     const input = document.getElementById('pdf-content');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       const imgWidth = 210; // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;

//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       heightLeft -= pdf.internal.pageSize.height;

//       while (heightLeft >= 0) {
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
//         heightLeft -= pdf.internal.pageSize.height;
//       }

//       pdf.save('expenses.pdf');
//       setLoading(false);
//     });
//   };

//   const csvData = items.map(item => ({
//     Date: item.date,
//     Category: item.category,
//     Amount: item.amount,
//     Note: item.note,
//     PaymentMethod: item.paymentMethod,
//   }));

//   const csvHeaders = [
//     { label: 'Date', key: 'Date' },
//     { label: 'Category', key: 'Category' },
//     { label: 'Amount', key: 'Amount' },
//     { label: 'Note', key: 'Note' },
//     { label: 'Payment Method', key: 'PaymentMethod' },
//   ];

//   return (
//     <div className={styles.homePage}>
//       <header className={styles.header}>
//         <h1>EXPENSE TRACKER APP</h1>
//       </header>
//       <main className={styles.main}>
//         <div className={styles.mainContent}>
//           <div className={styles.categoriesSection}>
//             <h2>Categories</h2>
//             <div className={styles.categories}>
//               {categories.map((category) => (
//                 <div
//                   key={category}
//                   className={`${styles.categoryCard} ${styles[category.toLowerCase().replace(/ /g, '-')]} ${selectedCategory === category ? styles.selected : ''}`}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <div className={styles.categoryName}>{category}</div>
//                   <div className={styles.categoryImage}></div>
//                 </div>
//               ))}
//             </div>
//             {showCustomInput && (
//               <div className={styles.customCategorySection}>
//                 <input
//                   type="text"
//                   value={customCategory}
//                   onChange={handleCustomCategoryChange}
//                   placeholder="Enter custom category"
//                 />
//                 <button onClick={handleAddCustomCategory}>Add</button>
//               </div>
//             )}
//             {selectedCategory && !showCustomInput && (
//               <div className={styles.selectedCategory}>
//                 <h3>{selectedCategory}</h3>
//               </div>
//             )}
//           </div>
//           <div className={styles.detailsSection}>
//             <div className={styles.inputBox}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className={styles.budgetTrackingSection}>
//               <label htmlFor="budget">Budget:</label>
//               <input
//                 type="number"
//                 id="budget"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 placeholder="Enter your budget"
//               />
//               {budgetExceeded && (
//                 <div className={styles.alert}>
//                   <p>Alert: Your expenses have exceeded the budget!</p>
//                 </div>
//               )}
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="amount">Amount:</label>
//               <input
//                 type="text"
//                 id="calculatorInput"
//                 value={calculatorInput}
//                 onChange={(e) => handleCalculatorInputChange(e.target.value)}
//                 placeholder="Calculate and enter amount"
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBox}>
//               <label htmlFor="note">Note:</label>
//               <input
//                 type="text"
//                 id="note"
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 placeholder="Enter note"
//               />
//             </div>
//             <div className={styles.paymentMethodSection}>
//               <label>Payment Method:</label>
//               <div className={styles.paymentMethods}>
//                 {['Cash', 'Account', 'Card', 'Other'].map(method => (
//                   <div key={method}>
//                     <input
//                       type="radio"
//                       id={method.toLowerCase()}
//                       name="paymentMethod"
//                       value={method}
//                       checked={paymentMethod === method}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <label htmlFor={method.toLowerCase()}>{method}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
//           </div>
//         </div>
//         <div className={styles.tableSection} id="pdf-content">
//           <div className={styles.tableHeader}>
//             <div>Category</div>
//             <div>Amount</div>
//             <div>Date</div>
//             <div>Note</div>
//             <div>Payment Method</div>
//             <div>Delete</div>
//           </div>
//           {items.map((item, index) => (
//             <div className={styles.tableRow} key={index}>
//               <div>{item.category}</div>
//               <div>{item.amount}</div>
//               <div>{item.date}</div>
//               <div>{item.note}</div>
//               <div>{item.paymentMethod}</div>
//               <div>
//                 <button onClick={() => handleDelete(index, item.id)}>Delete</button>
//               </div>
//             </div>
//           ))}
//           <br></br><br></br><br></br>
//           <div className={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</div>
//           {budget && <div className={styles.remainingBalance}>Remaining Balance: ${remainingBalance}</div>}
//         </div>
//         <br></br><br></br>
//         <div className={styles.exportButtons}>
//           <button onClick={exportPDF} disabled={loading}>
//             {loading ? 'Generating PDF...' : 'Export as PDF'}
//           </button>
//           <CSVLink data={csvData} headers={csvHeaders} filename="expenses.csv">
//             Export as CSV
//           </CSVLink>
//         </div>
//       </main>
//       <MiddleHome />
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { CSVLink } from 'react-csv'; // Import CSVLink
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import styles from '../components/HomePage.module.css';
import MiddleHome from './MiddleHome'; // Import MiddleHome component
import Footer from './Footer'; // Import Footer component

const categories = [
  'Food', 'Social Life', 'Pets', 'Transport', 'Culture',
  'Household', 'Apparel', 'Health', 'Education', 'Others'
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [calculatorInput, setCalculatorInput] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [customCategory, setCustomCategory] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetExceeded, setBudgetExceeded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === 'Others') {
      setShowCustomInput(true);
      setSelectedCategory('');
    } else {
      setShowCustomInput(false);
      setSelectedCategory(category);
    }
  };

  const handleCustomCategoryChange = (e) => setCustomCategory(e.target.value);

  const handleAddCustomCategory = () => {
    if (customCategory) {
      setSelectedCategory(customCategory);
      setCustomCategory('');
      setShowCustomInput(false);
    }
  };

  const handleCalculatorInputChange = (value) => {
    setCalculatorInput(value);
    try {
      setAmount(eval(value).toString());
    } catch {
      setAmount('');
    }
  };

  const handleSubmit = async () => {
    const newItem = {
      name,
      amount: parseFloat(amount),
      date,
      category: selectedCategory,
      note,
      paymentMethod
    };

    try {
      const response = await axios.post('http://localhost:8080/api/expenses', newItem);
      const newItems = [...items, response.data];
      setItems(newItems);

      // Resetting form fields after submission
      setName('');
      setAmount('');
      setDate('');
      setSelectedCategory('');
      setNote('');
      setPaymentMethod('');
      setCalculatorInput('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleDelete = async (index, id) => {
    try {
      await axios.delete(`http://localhost:8080/api/expenses/${id}`);
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      const totalAmount = updatedItems.reduce((acc, item) => acc + item.amount, 0);
      setBudgetExceeded(budget && totalAmount > parseFloat(budget));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
  const remainingBalance = budget ? (parseFloat(budget) - totalAmount).toFixed(2) : null;

  const exportPDF = () => {
    setLoading(true);
    const input = document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.height;

      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.height;
      }

      pdf.save('expenses.pdf');
      setLoading(false);
    });
  };

  const csvData = items.map(item => ({
    Date: item.date,
    Category: item.category,
    Amount: item.amount,
    Note: item.note,
    PaymentMethod: item.paymentMethod,
  }));

  const csvHeaders = [
    { label: 'Date', key: 'Date' },
    { label: 'Category', key: 'Category' },
    { label: 'Amount', key: 'Amount' },
    { label: 'Note', key: 'Note' },
    { label: 'Payment Method', key: 'PaymentMethod' },
  ];

  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>EXPENSE TRACKER APP</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.categoriesSection}>
            <h2>Categories</h2>
            <div className={styles.categories}>
              {categories.map((category) => (
                <div
                  key={category}
                  className={`${styles.categoryCard} ${styles[category.toLowerCase().replace(/ /g, '-')]} ${selectedCategory === category ? styles.selected : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className={styles.categoryName}>{category}</div>
                  <div className={styles.categoryImage}></div>
                </div>
              ))}
            </div>
            {showCustomInput && (
              <div className={styles.customCategorySection}>
                <input
                  type="text"
                  value={customCategory}
                  onChange={handleCustomCategoryChange}
                  placeholder="Enter custom category"
                />
                <button onClick={handleAddCustomCategory}>Add</button>
              </div>
            )}
            {selectedCategory && !showCustomInput && (
              <div className={styles.selectedCategory}>
                <h3>{selectedCategory}</h3>
              </div>
            )}
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.inputBox}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className={styles.budgetTrackingSection}>
              <label htmlFor="budget">Budget:</label>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget"
              />
              {budgetExceeded && (
                <div className={styles.alert}>
                  <p>Alert: Your expenses have exceeded the budget!</p>
                </div>
              )}
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="amount">Amount:</label>
              <input
                type="text"
                id="calculatorInput"
                value={calculatorInput}
                onChange={(e) => handleCalculatorInputChange(e.target.value)}
                placeholder="Calculate and enter amount"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="note">Note:</label>
              <input
                type="text"
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter note"
              />
            </div>
            <div className={styles.paymentMethodSection}>
              <label>Payment Method:</label>
              <div className={styles.paymentMethods}>
                {['Cash', 'Account', 'Card', 'Other'].map(method => (
                  <div key={method}>
                    <input
                      type="radio"
                      id={method.toLowerCase()}
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor={method.toLowerCase()}>{method}</label>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
          </div>
        </div>
        <div className={styles.tableSection} id="pdf-content">
          <div className={styles.tableHeader}>
            <div>Category</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Note</div>
            <div>Payment Method</div>
            <div>Actions</div>
          </div>
          {items.map((item, index) => (
            <div key={index} className={styles.tableRow}>
              <div>{item.category}</div>
              <div>{item.amount}</div>
              <div>{item.date}</div>
              <div>{item.note}</div>
              <div>{item.paymentMethod}</div>
              <div>
                <button onClick={() => handleDelete(index, item.id)} className={styles.deleteButton}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalSection}>
          <h3>Total Amount Spent: ₹{totalAmount.toFixed(2)}</h3>
          {remainingBalance !== null && (
            <h3>Remaining Balance: ₹{remainingBalance}</h3>
          )}
        </div>
        <div className={styles.exportSection}>
          <button onClick={exportPDF} className={styles.exportButton} disabled={loading}>
            {loading ? 'Loading...' : 'Export to PDF'}
          </button>
          <CSVLink data={csvData} headers={csvHeaders} filename="expenses.csv" className={styles.exportButton}>
            Export to Excel
          </CSVLink>
        </div>
      </main>
      <MiddleHome />
      <Footer />
    </div>
  );
};

export default HomePage;
