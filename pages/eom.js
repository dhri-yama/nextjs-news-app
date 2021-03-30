import Head from 'next/head'

export const EOM = ({employee}) => {
    return (
        <>
        <Head>
            <title> EOM</title>
        </Head>
        <div className="container">
            <h1 className="text-center text-4xl font-black mt-4">
                Employee of the month</h1>
            <div className="container flex flex-col items-center my-8">
                <h3 className="text-xl font-bold">
                    {employee.name}</h3>
                <h4 className="italic text-md mt-4">
                    {employee.position}</h4>
                <img src={employee.image} alt=""
                    className="rounded-full w-60 mt-6"/>
                <p className="italic text-lg mt-6">
                    {employee.description}</p>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps =async pagecontext =>{
    const apiRes= await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth")
    const employee =await apiRes.json()

    return{
        props:{
            employee
        }
    }
};

export default EOM;
 