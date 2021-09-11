const CODESPHERE_BASE_URL = 'https://codesphere.com';

function isPrivateRepo() {
    const headerElement = document.getElementById('repository-container-header');

    const elements = headerElement.getElementsByClassName('Label');

    if (elements.length > 0) {
        const labelElement = elements[0];

        if (labelElement.innerText === 'Private') {
            return true;
        }
    }

    return false;
}

function createCodesphereButtonElement() {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(...['btn', 'ml-2', 'd-none', 'd-md-block', 'codesphere-button']);
    buttonElement.innerText = 'Open in Codesphere';
    buttonElement.onclick = () => {
        location.href = `${CODESPHERE_BASE_URL}#${location.href}`;
    }

    return buttonElement;
}

function main() {
    const elements = document.getElementsByClassName('file-navigation');

    if (elements.length > 0) {
        if (isPrivateRepo()) {
            return;
        }

        const fileNavigation = elements[0];
        fileNavigation.appendChild(createCodesphereButtonElement());
    }
}

main();
