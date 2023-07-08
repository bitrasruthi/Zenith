import { Link } from "react-scroll";

type Props = {
  componentId: string;
};

const ScrollButton = (props: Props) => {
  return (
    <Link to={props.componentId} smooth={true} duration={800}>
      Learn More
    </Link>
  );
};

export default ScrollButton;
