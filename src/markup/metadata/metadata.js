import * as f from '@f'
import alternate from './alternate'
import author from './author'
import base from './base'
import canonical from './canonical'
import charset from './charset'
import description from './description'
import icon from './icon'
import manifest from './manifest'
import robots from './robots'
import themeColor from './themeColor'
import title from './title'
import viewport from './viewport'

export default (page) =>
  f.forEach(
    [alternate, author, base, canonical, charset, description, icon, manifest, robots, themeColor, title, viewport],
    m => m(page)
  )
