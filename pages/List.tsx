import MyLayout from "../src/components/layouts/MyLayout";
import * as faker from 'faker';
const ListPage = () => {
    return (
        <MyLayout>
            {console.log(faker.address.city())}
        </MyLayout>
    );
}


export default ListPage;

