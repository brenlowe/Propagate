

function Article({subtitle, title, image}) {
  return (
    <div>
        <a href="" className="text-left hover:underline">
            <img 
                src={image} 
                alt="blog image" 
                className=""
            />
            <h6 className="font-Archivo font-bold uppercase tracking-wide text-[12px] mt-2 mb-1">{subtitle}</h6>
            <h4 className="font-Gelasio font-medium">{title}</h4>
        </a>
    </div>
  )
}

export default Article