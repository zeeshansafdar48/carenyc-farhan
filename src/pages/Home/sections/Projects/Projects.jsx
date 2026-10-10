import Container from '@/components/Container/Container'
import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section aria-label="Selected work">
      <Container>
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </Container>
    </section>
  )
}
