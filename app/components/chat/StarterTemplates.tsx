import React from 'react';
import type { Template } from '~/types/template';
import { STARTER_TEMPLATES } from '~/utils/constants';

interface FrameworkLinkProps {
  template: Template;
}

const FrameworkLink: React.FC<FrameworkLinkProps> = ({ template }) => (
  <a href={`${template.githubRepo}`} data-state="closed" data-discover="true" className="items-center justify-center ">
    <div
      className={`inline-block ${template.icon} w-8 h-8 text-4xl transition-theme opacity-25 hover:opacity-75 transition-all`}
    />
  </a>
);

const StarterTemplates: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm text-gray-500">
        Unsure how to get started? Read our quick step-by-step guide{' '}
        <a href="https://docs.idea.gy">
          <u>here</u>.
        </a>
      </span>
      <span className="text-sm text-gray-500">
        <a href="https://x.com/ideadotgy">Connect with us on X (formerly Twitter) @ideadotgy.</a>
      </span>
      <span className="text-sm text-gray-500">
        <a href="https://dexscreener.com/">
          $IDEA Contract: <b>2XKTuB8JVMfFUcV5ndY8pFiZmo15w74HJg6pGCy4pump</b>
        </a>
      </span>
      <div className="flex justify-center">
        <div className="flex w-70 flex-wrap items-center justify-center gap-4">
          {STARTER_TEMPLATES.map((template) => (
            <FrameworkLink key={template.name} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarterTemplates;
