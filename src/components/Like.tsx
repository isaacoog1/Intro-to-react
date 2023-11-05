import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [filled, setLikeFill] = useState(true);

  const toggle = () => {
    setLikeFill(!filled);
    onClick();
  }

  if (filled) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle}/>
};

export default Like;
