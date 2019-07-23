import ProductDescription from "./ProductDescriptionText";
import * as faker from 'faker'

const product = () => {
    function generateDummyData() {
        let dataArr = [];
        for (let i = 0; i <= 10; i++) {
            dataArr.push(faker.lorem.sentence());
        }
        console.log(dataArr);
        return dataArr;
    }

    generateDummyData();
    return (
        <div>
            <div>
                <img src="/static/images/b.webp" alt=""/>
            </div>
            <ProductDescription data={generateDummyData()}/>
        </div>
    )
};

export default product;