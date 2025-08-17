import { useHomeProductsStyles} from './home-products.style';

const HomeProductsComponent = () => {
    const classes = useHomeProductsStyles();
    return (
        <div className={'container'}>
            <div className={classes.wrapper}>
                <h6>Products</h6>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1 className={'mt-20'}>Daşınmaz əmlak krediti</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <p>Quisque bibendum adipiscing sem massa auctor nulla donec mi integer. Suspendisse eget
                            convallis magna viverra amet. Ut quam scelerisque massa morbi ac pharetra. Sit at elit non
                            et diam. Quam a id egestas elit. Posuere cursus accumsan urna viverra. Sit egestas et
                            convallis donec risus sapien enim. Gravida praesent adipiscin</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default HomeProductsComponent;