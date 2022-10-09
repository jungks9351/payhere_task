export type RepoType = {
  id: number
  full_name: string
  owner: {
    avatar_url: string
  }
  description: string
  html_url: string
}

export type IssueType = {
  title: string
  html_url: string
  state: string
}
