import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import PageTitle from '@/components/PageTitle/PageTitle'
import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase'
import { workProjects } from '@/data/projects'
import styles from './Work.module.scss'

export default function Work() {
  return (
    <Container className={styles.work}>
      <PageTitle className={styles.title}>Work</PageTitle>
      {workProjects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} headingLevel="h2" />
      ))}
      <Divider />
    </Container>
  )
}
