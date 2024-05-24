import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {

    const navigation = useNavigation();

    return (

        <div className="w-11/12 mx-auto">
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <p><span className="loading loading-spinner text-primary"></span></p>
                    :
                    <Outlet></Outlet>
            }

        </div>
    );
};

export default Root;
