import MyLayout from "../../src/components/layouts/MyLayout";

const Post = props => (
    <MyLayout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </MyLayout>
);

// tslint:disable-next-line:only-arrow-functions
Post.getInitialProps = async (context) =>  {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;
