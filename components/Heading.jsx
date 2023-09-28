import Image from "next/image";
const Heading = (props) => {
  return (
    <div className="Heading">
        <div className="heading_top">
            <div className="decoration">
                <Image src="/kankotri-p3-assets/hdl.png" layout="fill"/>
            </div>
            <div className="heading_text">
                <h2>{props.title}</h2>
            </div>
            <div className="decoration">    
                 <Image src="/kankotri-p3-assets/hdr.png" layout="fill"/>
            </div>
        </div>
        <div className="bottom_decoration">    
            <Image src="/kankotri-p3-assets/hdb.png" layout="fill"/>
        </div>
    </div>
  )
}

export default Heading