import Card from "@/components/Card"

const Landing: React.FC =  () => {
return (
  <>
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1> 
    </div>
    <div>
        <h2 className=" text-3xl font-semibold mt-4 mb-4">Homes around the world</h2>        
    </div>
    <Card />
  </>
)
}
export default Landing