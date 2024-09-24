export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48';
  const container = document.createElement('div');
  container.className = 'tw-container';
  const flexDiv = document.createElement('div');
  flexDiv.className = 'tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap';
  block.classList.add('tw');
  [...block.children].forEach((row) => {
    const newCol = document.createElement('div');
    newCol.className ='tw-w-full md:tw-w-1/2 tw-flex tw-flex-col media-grid-item  md:tw-pt-0 false';
    const pic = row.querySelector ('picture');
    const imageContainer = document.createElement('div');
    const link = row.querySelector('a');
    link.target = '_blank';
    if (row.children.length === 1) {
      imageContainer.className = 'tw-w-full tw-relative tw-overflow-hidden tw-aspect-[8/5]';
      const imgW = pic.querySelector('img');
      imgW.className = 'tw-transition-all tw-duration-500 tw-inset-0 tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover hover:tw-scale-[1.05] motion-reduce:hover:tw-transform-none';
      link.appendChild(pic);
      imageContainer.appendChild(link);
      newCol.appendChild(imageContainer);
      flexDiv.appendChild(newCol);
    }
  });
  container.appendChild(flexDiv);
  section.appendChild(container);
  block.textContent = '';
  block.appendChild(section);
}
