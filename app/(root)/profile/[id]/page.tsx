
const Page = async ({ params } : ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className="text-2xl font-karla">User Id: {id}</div>
    )
}
export default Page
