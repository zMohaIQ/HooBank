/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Button = ({ styles }) => {
  return <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:translate-y-[-5px] duration-300`}>Get Started</button>;
};

export default Button;
