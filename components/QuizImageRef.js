import { useRouter } from "next/router";
import { useContext } from "react";
import { QuizContext } from "../lib/QuizContext";


/**
 * Component used when an image is used in the markdown of a quiz
 */
export default function QuizImageRef({ children, ...props }) {

    const router    = useRouter()
    const context   = useContext(QuizContext);
     
    const basePath = router.basePath+"/"+context.quiz.path.replace(/(.*)\/[^\/]+\.md$/,"$1/"+props.src)
  
    return <img className="p-8 max-w-full box-border" src={ basePath } alt={props.alt}/> 
}