import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const listSocial = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/ilham.bustomi.581/",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/3150Ilham22579",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/_ilham_bustomi_/?hl=id",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ilham-bustomi-4a76633a1/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Tomi-012",
  },
];


const BoxSocial = () => {
  return (
    <div className="mt-15 flex gap-2">
      {listSocial.map((item, index) => (
        <button
          key={index}
          className="h-10 w-10 flex justify-center items-center cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-2 py-1 hover:bg-(--bg-secondary-cray)"
          onClick={() => window.open(item.link, "_blank")}
        >
          <span className="text-md">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};
export default BoxSocial;