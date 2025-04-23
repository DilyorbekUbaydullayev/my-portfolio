
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
function AllProjects() {
  return (
    <div className='min-h-screen mt-20'>
      <Breadcrumb className="ps-4">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/#projects">Projects</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/allprojects">All projects</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
        <h1 className='mt-20 h-[50vh] text-white/70 text-center text-lg md:text-4xl px-4 flex items-center justify-center'>Coming soon added new projects </h1>
    </div>
  )
}

export default AllProjects