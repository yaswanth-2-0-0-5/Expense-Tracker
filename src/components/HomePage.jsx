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




//current 




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
  //       <div className={styles.tableSection} id="pdf-content">
  //         <div className={styles.tableHeader}>
  //           <div>Category</div>
  //           <div>Amount</div>
  //           <div>Date</div>
  //           <div>Note</div>
  //           <div>Payment Method</div>
  //           <div>Actions</div>
  //         </div>
  //         {items.map((item, index) => (
  //           <div key={index} className={styles.tableRow}>
  //             <div>{item.category}</div>
  //             <div>{item.amount}</div>
  //             <div>{item.date}</div>
  //             <div>{item.note}</div>
  //             <div>{item.paymentMethod}</div>
  //             <div>
  //               <button onClick={() => handleDelete(index, item.id)} className={styles.deleteButton}>Delete</button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className={styles.totalSection}>
  //         <h3>Total Amount Spent: ₹{totalAmount.toFixed(2)}</h3>
  //         {remainingBalance !== null && (
  //           <h3>Remaining Balance: ₹{remainingBalance}</h3>
  //         )}
  //       </div>
  //       <div className={styles.exportSection}>
  //         <button onClick={exportPDF} className={styles.exportButton} disabled={loading}>
  //           {loading ? 'Loading...' : 'Export to PDF'}
  //         </button>
  //         <CSVLink data={csvData} headers={csvHeaders} filename="expenses.csv" className={styles.exportButton}>
  //           Export to Excel
  //         </CSVLink>
  //       </div>
  //     </main>
  //     <MiddleHome />
  //     <Footer />
  //   </div>
  // );
// };

// export default HomePage;


import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import styles from '../components/HomePage.module.css';
import MiddleHome from './MiddleHome';
import Footer from './Footer';

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
  const [isEditing, setIsEditing] = useState(false);  // To manage editing state
  const [editItemId, setEditItemId] = useState(null);  // To store the item ID being edited

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
      let response;
      if (isEditing) {
        // Update the existing item if editing
        response = await axios.put(`http://localhost:8080/api/expenses/${editItemId}`, newItem);
        const updatedItems = items.map(item =>
          item.id === editItemId ? response.data : item
        );
        setItems(updatedItems);
      } else {
        // Add a new expense if not editing
        response = await axios.post('http://localhost:8080/api/expenses', newItem);
        setItems([...items, response.data]);
      }

      // Reset form after submission
      setName('');
      setAmount('');
      setDate('');
      setSelectedCategory('');
      setNote('');
      setPaymentMethod('');
      setCalculatorInput('');
      setIsEditing(false);  // Reset editing mode
      setEditItemId(null);  // Clear edit item ID
    } catch (error) {
      console.error('Error adding/editing expense:', error);
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

  const handleEdit = (item) => {
    setName(item.name);
    setAmount(item.amount.toString());
    setDate(item.date);
    setSelectedCategory(item.category);
    setNote(item.note);
    setPaymentMethod(item.paymentMethod);
    setIsEditing(true);
    setEditItemId(item.id);  // Set the item ID to update
  };

  const handleGet = (id) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setName(item.name);
      setAmount(item.amount.toString());
      setDate(item.date);
      setSelectedCategory(item.category);
      setNote(item.note);
      setPaymentMethod(item.paymentMethod);
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
            {/* <div className={styles.inputBox}>
              <label htmlFor="paymentMethod">Payment Method:</label>
              <input
                type="text"
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                placeholder="Enter payment method"
              />
            </div> */}

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
      {/* <div className={styles.table}>
        <h2>Expense List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Note</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>{item.note}</td>
                <td>{item.paymentMethod}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(index, item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.exportButtons}>
        <button onClick={exportPDF} disabled={loading}>
          {loading ? 'Exporting...' : 'Export to PDF'}
        </button>
        <CSVLink data={csvData} headers={csvHeaders} filename="expenses.csv">
          <button>Export to CSV</button>
        </CSVLink>
      </div>
        <MiddleHome />
        <Footer />
      </main>
    </div> */}

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
                <button onClick={() => handleEdit(item)} className={styles.editButton}>Edit</button>
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
