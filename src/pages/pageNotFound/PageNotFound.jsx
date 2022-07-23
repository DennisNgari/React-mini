import { Image, PageNotFoundContainer, Text } from "./style"
import img from "../../assets/img/pageNotFound.png"

const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <Image src = {img}/>
            <Text> This Page Could Not be Found</Text>
            
        </PageNotFoundContainer>
    )
}

export default PageNotFound
