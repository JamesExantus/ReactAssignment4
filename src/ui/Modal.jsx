//modal active but styling not showing for some reason 
function Modal({isVisible, hideModal}) {
    if(!isVisible) {return null}
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  ">
             <div className="max-w-xl w-144 mx-auto flex flex-col">
                <button className="text-white text-xl place-self-end">X </button>
             </div>
        </div>
       

        
    )

}

export default Modal;