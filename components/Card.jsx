import Image from "next/image";
import Link from "next/link";

export default function Card({ imgPath, text, sale }) {
  return (
    <div className="p-2 card-custom pb-4 mb-2">
      <div
        className={`${
          sale && "sale"
        } position-relative rounded mb-4 d-flex justify-content-center`}
      >
        <Image
          src={imgPath}
          width={413}
          height={330}
          alt="basket icon"
          className="w-100"
        />
      </div>
      <p className="text-center px-2 mb-3 lg-mb-5">{text}</p>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <a className="bg-custom-green py-3 px-4 d-inline-block text-white rounded-pill fs-18 fw-semibold">
            View Card
          </a>
        </Link>
      </div>
    </div>
  );
}
