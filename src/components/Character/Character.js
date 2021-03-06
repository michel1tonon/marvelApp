import React from 'react';
import './Character.scss'

const CharacterComponent = ({ character = {}, active, handleClick }) => (
	<div className="CharacterComponent">
		<header className="accordion" onClick={handleClick}>
			<div className="capsule">
				<img src={character.thumbnail.default} alt='character'></img>
			</div>
			<div className="block-1">
				<p className="character-name">{character.name}</p>
			</div>
			<div className="block-2">
				{
					character.series.items
						.filter((item, index) => index < 3)
						.map(serie => <small key={'serie_' + serie.name}>{serie.name}</small>)
				}
			</div>
			<div className="block-3">
				{
					character.events.items
						.filter((item, index) => index < 3)
						.map(event => <small key={'event_' + event.name}>{event.name}</small>)
				}
			</div>
		</header>
		<div className={`panel ${active ? 'active' : ''}`}>
			<div className="capsule">
				<img src={character.thumbnail.xLarge} alt='character'></img>
			</div>
			<p className="text-name">{character.name}</p>
			<div className="content">
				<div className="block-1">
					Stories
					{
						character.stories.items
							.map(storie => <small key={'storie' + storie.name}>{storie.name}</small>)
					}
				</div>
				<div className="block-2">
					Series
					{
						character.series.items
							.map(serie => <small key={'serie_' + serie.name}>{serie.name}</small>)
					}
				</div>
				<div className="block-3">
					Events
					{
						character.events.items
							.map(event => <small key={'event_' + event.name}>{event.name}</small>)
					}
				</div>
				<div className="block-4">
					Events
					{
						character.comics.items
							.map(comic => <small key={'comic_' + comic.name}>{comic.name}</small>)
					}
				</div>
			</div>
			<div className="see-more">
				{character.urls.map(url => <a href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a>)}
			</div>

		</div>
	</div>
);



export default CharacterComponent;
