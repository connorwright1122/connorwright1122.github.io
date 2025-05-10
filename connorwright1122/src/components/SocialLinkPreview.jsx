import React from 'react';
import { YouTubeEmbed, InstagramEmbed } from 'react-social-media-embed';

export default function SocialLinkPreview({ url }) {
  if (typeof url !== 'string') return null;

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return (
        <YouTubeEmbed url={url}></YouTubeEmbed>
    );
  }

  if (url.includes('instagram.com')) {
    return (
      <div>
        <InstagramEmbed url={url} width="328" captioned></InstagramEmbed>
      </div>
    );
  }

  /*
  if (url.includes('twitter.com')) {
    return (
      <div>
        <p>Twitter:</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </div>
    );
  }

  if (url.includes('linkedin.com')) {
    return (
      <div>
        <p>LinkedIn:</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </div>
    );
  }
*/
  // Fallback
  return (
    <div>
      <p>Link:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    </div>
  );
}
