import Header from "@/components/Header";

const Page = async ({ params } : ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className="wrapper page">
            <Header subHeader="pro_grammer@meltjac.tech" title="Meltjac | Techs" userImg="/assets/images/dummy.jpg"/>

            <h1 className="text-2xl font-karla" >User Id: {id}</h1>
            </div>
    )
}
export default Page
