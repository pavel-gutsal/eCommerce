import '../BlockLinkPhones';
import './BlockLinkLaptops.styles.css';

export const BlockLinkLaptops = () => {
  return (
    <button type="button" className="BlockLinkItem BlockLinkLaptopButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="M85.385 881.384q-26.846 0-46.115-19.269Q20.001 842.846 20.001 816H172.31q-30.308 0-51.308-21t-21-51.307V308.309q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v435.384q0 30.307-21 51.307-21 21-51.308 21h152.308q0 26.846-19.269 46.115-19.269 19.269-46.115 19.269H85.385Zm394.615-30q13.538 0 22.923-9.384 9.384-9.385 9.384-22.923 0-13.538-9.384-22.923-9.385-9.384-22.923-9.384-13.538 0-22.923 9.384-9.384 9.385-9.384 22.923 0 13.538 9.384 22.923 9.385 9.384 22.923 9.384Zm-307.691-95.383h615.382q4.616 0 8.463-3.846 3.846-3.846 3.846-8.462V308.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H172.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v435.384q0 4.616 3.846 8.462 3.847 3.846 8.463 3.846Zm-12.309 0V296 756.001Z" />
      </svg>
      Laptops
    </button>
  );
};