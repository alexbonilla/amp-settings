export default function AmpSetting (props) {

  const { setting } = props;

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 className="title is-12">{setting.name}</h3>
          <label>Posted by </label><div>{setting.postedby}</div>
          <br/>
          <table className="table is-bordered is-narrow has-text-centered">
            <thead>
              <tr>
                <th><abbr title="Volume">Vol</abbr></th>
                <th><abbr title="FAT">FAT</abbr></th>
                <th><abbr title="Treble">T</abbr></th>
                <th><abbr title="Bass">B</abbr></th>
                <th><abbr title="Middle">M</abbr></th>
                <th><abbr title="Master">Master</abbr></th>
                <th><abbr title="Reverb">R</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{setting.controls.volume}</td>
                <td>{setting.controls.fat}</td>
                <td>{setting.controls.treble}</td>
                <td>{setting.controls.bass}</td>
                <td>{setting.controls.middle}</td>
                <td>{setting.controls.master}</td>
                <td>{setting.controls.reverb}</td>
              </tr>
            </tbody>
          </table>
          <br/>
        </div>
      </div>
    </div>
  )
}
