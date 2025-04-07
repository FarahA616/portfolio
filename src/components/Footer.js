import PropTypes from "prop-types";
import Link from "next/link";

const Footer = ({ links, year }) => {
  return (
    <footer
      data-testid="footer"
      className="flex flex-wrap justify-center items-center py-4 px-20 text-center sm:px-4"
    >
      {/* Links on the left */}
      <ul className="flex flex-row items-center space-x-6 list-none m-0 p-0">
        {links.map((link, index) => (
          <li data-testid={`footerLink${index}`} key={index}>
            <Link
              href={link.url}
              className="text-gray-600 hover:text-gray-800 hover:underline transition-colors"
              aria-label={`Navigate to ${link.title}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Year on the right */}
      <p
        data-testid="footerContent"
        className="text-gray-500 text-sm m-0 whitespace-nowrap"
      >
        {year}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  year: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  links: [],
  
};

export default Footer;
