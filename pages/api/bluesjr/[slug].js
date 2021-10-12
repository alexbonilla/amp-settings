import settings from '../../../data/bluesjr';

export default async (req, res) => {  
  const filtered = settings.filter(item => item.slug === req.query.slug);

  if (filtered.length > 0) {
    let setting = filtered[0];

    res.status(200).json(setting);
  } else {
    res.status(404).json({ error: 'Setting not found.' });
  }
};
