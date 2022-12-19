import Swal from 'sweetalert';

export function useFlash()
{


    function Alert(icon , title , text ,confirmButtonText)
    {
        return Swal(icon , title , text , confirmButtonText)
    }
}
